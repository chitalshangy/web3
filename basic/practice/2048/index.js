const SIZE = 4;
let grid = [];
let score = 0;
let hasMoved = false; // Flag to check if any cell moved

document.addEventListener('DOMContentLoaded', () => {
    initGame();
    document.addEventListener('keydown', handleKeyPress);
});

function initGame() {
    grid = Array.from({ length: SIZE }, () => Array(SIZE).fill(null));
    addRandomCell();
    addRandomCell();
    render();
}

function addRandomCell() {
    let emptyCells = [];
    for (let row = 0; row < SIZE; row++) {
        for (let col = 0; col < SIZE; col++) {
            if (grid[row][col] === null) {
                emptyCells.push({ row, col });
            }
        }
    }
    if (emptyCells.length === 0) return;
    const { row, col } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    grid[row][col] = { value: Math.random() < 0.9 ? 2 : 4, isNew: true };
}

function render() {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = '';
    for (let row = 0; row < SIZE; row++) {
        for (let col = 0; col < SIZE; col++) {
            const cellData = grid[row][col];
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.setAttribute('data-value', cellData ? cellData.value : '');
            if (cellData && cellData.isNew) {
                cell.classList.add('new');
            }
            cell.textContent = cellData ? cellData.value : '';
            gridContainer.appendChild(cell);
        }
    }
    document.getElementById('score').textContent = `Score: ${score}`;
    clearNewMarkers(); // Clear new markers after rendering
}

function clearNewMarkers() {
    for (let row = 0; row < SIZE; row++) {
        for (let col = 0; col < SIZE; col++) {
            if (grid[row][col]) {
                grid[row][col].isNew = false;
            }
        }
    }
}

function handleKeyPress(event) {
    hasMoved = false; // Reset the flag
    switch (event.key) {
        case 'ArrowUp':
            moveUp();
            break;
        case 'ArrowDown':
            moveDown();
            break;
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break;
    }
    if (hasMoved) {
        addRandomCell();
        render();
        if (isGameOver()) {
            alert('Game Over!');
        }
    }
}

function moveLeft() {
    let moved = false;
    for (let row = 0; row < SIZE; row++) {
        let newRow = grid[row].filter(cell => cell !== null).map(cell => cell.value); // Remove nulls and get values
        let mergedRow = [];
        let skip = false;
        for (let i = 0; i < newRow.length; i++) {
            if (skip) {
                skip = false;
                continue;
            }
            if (i < newRow.length - 1 && newRow[i] === newRow[i + 1]) {
                mergedRow.push(newRow[i] * 2);
                score += newRow[i] * 2;
                skip = true;
                moved = true;
            } else {
                mergedRow.push(newRow[i]);
            }
        }
        while (mergedRow.length < SIZE) {
            mergedRow.push(0); // Fill the rest of the row with zeros
        }
        mergedRow = mergedRow.map(value => value === 0 ? null : { value, isNew: false }); // Convert zeros to nulls
        if (!arraysEqual(grid[row].map(cell => cell ? cell.value : null), mergedRow.map(cell => cell ? cell.value : null))) {
            moved = true;
        }
        grid[row] = mergedRow;
    }
    hasMoved = moved;
}

function moveRight() {
    let moved = false;
    for (let row = 0; row < SIZE; row++) {
        let newRow = grid[row].filter(cell => cell !== null).map(cell => cell.value); // Remove nulls and get values
        let mergedRow = [];
        let skip = false;
        for (let i = newRow.length - 1; i >= 0; i--) {
            if (skip) {
                skip = false;
                continue;
            }
            if (i > 0 && newRow[i] === newRow[i - 1]) {
                mergedRow.unshift(newRow[i] * 2);
                score += newRow[i] * 2;
                skip = true;
                moved = true;
            } else {
                mergedRow.unshift(newRow[i]);
            }
        }
        while (mergedRow.length < SIZE) {
            mergedRow.unshift(0); // Fill the rest of the row with zeros
        }
        mergedRow = mergedRow.map(value => value === 0 ? null : { value, isNew: false }); // Convert zeros to nulls
        if (!arraysEqual(grid[row].map(cell => cell ? cell.value : null), mergedRow.map(cell => cell ? cell.value : null))) {
            moved = true;
        }
        grid[row] = mergedRow;
    }
    hasMoved = moved;
}

function moveUp() {
    let moved = false;
    for (let col = 0; col < SIZE; col++) {
        let newCol = [];
        for (let row = 0; row < SIZE; row++) {
            if (grid[row][col] !== null) {
                newCol.push(grid[row][col].value);
            }
        }
        let mergedCol = [];
        let skip = false;
        for (let i = 0; i < newCol.length; i++) {
            if (skip) {
                skip = false;
                continue;
            }
            if (i < newCol.length - 1 && newCol[i] === newCol[i + 1]) {
                mergedCol.push(newCol[i] * 2);
                score += newCol[i] * 2;
                skip = true;
                moved = true;
            } else {
                mergedCol.push(newCol[i]);
            }
        }
        while (mergedCol.length < SIZE) {
            mergedCol.push(0); // Fill the rest of the column with zeros
        }
        mergedCol = mergedCol.map(value => value === 0 ? null : { value, isNew: false }); // Convert zeros to nulls
        for (let row = 0; row < SIZE; row++) {
            if (grid[row][col] === null && mergedCol[row] !== null) {
                moved = true;
            } else if (grid[row][col] !== null && mergedCol[row] === null) {
                moved = true;
            } else if (grid[row][col] !== null && mergedCol[row] !== null && grid[row][col].value !== mergedCol[row].value) {
                moved = true;
            }
            grid[row][col] = mergedCol[row];
        }
    }
    hasMoved = moved;
}

function moveDown() {
    let moved = false;
    for (let col = 0; col < SIZE; col++) {
        let newCol = [];
        for (let row = SIZE - 1; row >= 0; row--) {
            if (grid[row][col] !== null) {
                newCol.push(grid[row][col].value);
            }
        }
        let mergedCol = [];
        let skip = false;
        for (let i = 0; i < newCol.length; i++) {
            if (skip) {
                skip = false;
                continue;
            }
            if (i < newCol.length - 1 && newCol[i] === newCol[i + 1]) {
                mergedCol.push(newCol[i] * 2);
                score += newCol[i] * 2;
                skip = true;
                moved = true;
            } else {
                mergedCol.push(newCol[i]);
            }
        }
        while (mergedCol.length < SIZE) {
            mergedCol.push(0); // Fill the rest of the column with zeros
        }
        mergedCol.reverse(); // Reverse to match the original column order
        mergedCol = mergedCol.map(value => value === 0 ? null : { value, isNew: false }); // Convert zeros to nulls
        for (let row = 0; row < SIZE; row++) {
            if (grid[row][col] === null && mergedCol[row] !== null) {
                moved = true;
            } else if (grid[row][col] !== null && mergedCol[row] === null) {
                moved = true;
            } else if (grid[row][col] !== null && mergedCol[row] !== null && grid[row][col].value !== mergedCol[row].value) {
                moved = true;
            }
            grid[row][col] = mergedCol[row];
        }
    }
    hasMoved = moved;
}

function arraysEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

function isGameOver() {
    for (let row = 0; row < SIZE; row++) {
        for (let col = 0; col < SIZE; col++) {
            if (grid[row][col] === null) return false;
            if (col < SIZE - 1 && grid[row][col] && grid[row][col].value === grid[row][col + 1]?.value) return false;
            if (row < SIZE - 1 && grid[row][col] && grid[row][col].value === grid[row + 1][col]?.value) return false;
        }
    }

    return true;
}
