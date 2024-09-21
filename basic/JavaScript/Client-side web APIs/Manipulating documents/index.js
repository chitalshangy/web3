const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    let value = input.value;
    input.textContent = '';
    let li = document.createElement("li");
    let span = document.createElement("span");
    let delButton = document.createElement("button");

    li.appendChild(span);
    span.textContent = value;
    li.appendChild(delButton);
    delButton.textContent = "Delete";
    ul.appendChild(li);
    delButton.addEventListener("click", () => {
        ul.removeChild(li);
    })

    input.focus();
})