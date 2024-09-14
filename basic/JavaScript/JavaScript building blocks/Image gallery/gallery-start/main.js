const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imageObjectArr = [
    {
        name: "images/pic1.jpg",
        desc: "Closeup of a human eye"
    },
    {
        name: "images/pic2.jpg",
        desc: "Rock that looks like a wave"
    },
    {
        name: "images/pic3.jpg",
        desc: "Purple and white pansies"
    },
    {
        name: "images/pic4.jpg",
        desc: "Section of wall from a pharoah\'s tomb"
    },
    {
        name: "images/pic5.jpg",
        desc: "Large moth on a leaf"
    }
];

for (let image of imageObjectArr) {
    const newImage = document.createElement("img");
    newImage.setAttribute("src", image.name);
    newImage.setAttribute("alt", image.desc);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

btn.addEventListener("click", () => {
    const btnClass = btn.getAttribute("class");
    if (btnClass === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgb(0, 0, 0, 0)";
    }
})
