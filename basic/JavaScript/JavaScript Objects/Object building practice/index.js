const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const balls = [];

const p = document.querySelector("p");
let ballNum = 0;

const EVIL_VEL = 20;
const EVIL_SIZE = 10;
const EVIL_LINE_WIDTH = 3;

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Shape {
    constructor(x, y, velX, velY) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
    }
}

class Ball extends Shape {

    exists = true;

    constructor(x, y, velX, velY, color, size) {
        super(x, y, velX, velY);
        this.color = color;
        this.size = size;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    update() {
        if ((this.x + this.size) >= width) {
            this.velX = -(this.velX);
        }

        if ((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
        }

        if ((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }

        if ((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }

        this.x += this.velX;
        this.y += this.velY;
    }

    collisionDetect() {
        for (let ball of balls) {
            if (this !== ball && ball.exists) {
                let dx = this.x - ball.x;
                let dy = this.y - ball.y;
                let distanceSq = dx * dx + dy * dy;
                let sizeSum = this.size + ball.size;
                let sizeSumSq = sizeSum * sizeSum;

                if (distanceSq < sizeSumSq) {
                    // 变更颜色
                    ball.color = this.color = randomRGB();

                    // 计算法向量
                    let distance = Math.sqrt(distanceSq);
                    let normalX = dx / distance;
                    let normalY = dy / distance;

                    // 将速度沿法向量反向
                    let dotProduct = this.velX * normalX + this.velY * normalY;
                    this.velX -= 2 * dotProduct * normalX;
                    this.velY -= 2 * dotProduct * normalY;

                    let ballDotProduct = ball.velX * normalX + ball.velY * normalY;
                    ball.velX -= 2 * ballDotProduct * normalX;
                    ball.velY -= 2 * ballDotProduct * normalY;

                    // 调整位置以消除重叠
                    let overlap = sizeSum - distance;
                    this.x += normalX * (overlap / 2);
                    this.y += normalY * (overlap / 2);
                    ball.x -= normalX * (overlap / 2);
                    ball.y -= normalY * (overlap / 2);
                }
            }
        }
    }
}

class EvilCircle extends Shape {

    constructor(x, y) {
        super(x, y, EVIL_VEL, EVIL_VEL);
        this.color = "rgb(255, 255, 255)";
        this.size = EVIL_SIZE;

        window.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "a": this.x -= this.velX; break;
                case "d": this.x += this.velX; break;
                case "w": this.y -= this.velY; break;
                case "s": this.y += this.velY; break;
            }
        })
    }


    draw() {
        ctx.beginPath();
        ctx.lineWidth = EVIL_LINE_WIDTH;
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.stroke();
    }

    checkBounds() {
        if ((this.x + this.size) >= width) {
            this.x -= this.size;
        }

        if ((this.x - this.size) <= 0) {
            this.x += this.size;
        }

        if ((this.y + this.size) >= height) {
            this.y -= this.size;
        }

        if ((this.y - this.size) <= 0) {
            this.y += this.size;
        }
    }

    collisionDetect() {
        for (let ball of balls) {
            if (ball.exists) {
                let dx = this.x - ball.x;
                let dy = this.y - ball.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < this.size + ball.size) {
                    ball.exists = false;
                    displayBallNum(ballNum--);
                }
            }
        }
    }
}

function loop() {
    ctx.fillStyle = "rgb(0 0 0 / 0.25)";
    ctx.fillRect(0, 0, width, height);

    evilCircle.draw();
    evilCircle.checkBounds();
    evilCircle.collisionDetect();

    for (let ball of balls) {
        if (ball.exists) {
            ball.draw();
            ball.update();
            ball.collisionDetect()
        }
    }

    requestAnimationFrame(loop);
}

function displayBallNum(ballNum) {
    p.textContent = `Ball count: ${ballNum}`;
}

while (balls.length < 25) {
    let size = random(10, 20);
    let ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        randomRGB(),
        size,
    );
    balls.push(ball);
    displayBallNum(ballNum++);
}

let evilCircle = new EvilCircle(random(0, width), random(0, height));

loop();