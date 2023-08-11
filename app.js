const block = document.querySelector(".block");

const colorInput = document.getElementById("colorInput");

const sizeInput = document.getElementById("sizeInput");
const widthSizeInput = document.getElementById("widthSizeInput");
const heightSizeInput = document.getElementById("heightSizeInput");

const sizeBorder = document.getElementById("sizeBorder");

const removeButton = document.getElementById("removeButton");

const remove = document.getElementById("remove");

let color = "";
colorInput.addEventListener("input", (e) => {
    color = colorInput.value;
});

let size = "";
sizeInput.addEventListener("input", (e) => {
    size = sizeInput.value;
});
let widthSize = "";
widthSizeInput.addEventListener("input", (e) => {
    widthSize = widthSizeInput.value;
});
let heightSize = "";
heightSizeInput.addEventListener("input", (e) => {
    heightSize = heightSizeInput.value;
});

let border = "";
sizeBorder.addEventListener("input", (e) => {
    border = sizeBorder.value;
});

document.addEventListener("mousemove", blockGet);
block.addEventListener("click", blockSet);

function blockGet(e) {
    let x = e.pageX;
    let y = e.pageY;

    block.style.transform = `translate(${x - size / 1.5}px, ${
        y - size / 1.5
    }px)`;

    block.style.backgroundColor = color;

    block.style.width = `${size}px`;
    block.style.height = `${size}px`;

    block.style.width = `${widthSize}px`;
    block.style.height = `${heightSize}px`;

    block.style.borderRadius = `${border}%`;
}

let box;
let boxArr = [];
function blockSet(e) {
    let x = e.pageX;
    let y = e.pageY;

    box = document.createElement("div");
    box.classList.add("box");
    document.body.appendChild(box);

    box.style.backgroundColor = color;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;

    box.style.width = `${widthSize}px`;
    box.style.height = `${heightSize}px`;

    box.style.borderRadius = `${border}%`;

    box.style.transform = `translate(${x - size / 1.5}px, ${y - size / 1.5}px)`;

    boxArr.push(box);
}

let active = false;
removeButton.addEventListener("click", () => {
    active=!active


    //active == true ? (active = false) : (active = true);
});
function removeItem(e) {
    if (active) {
        block.style.display = "none";

        boxArr.forEach((item) => {
            item.addEventListener("click", (event) => {
                event.target.remove();
            });
        });
    } else {
        block.style.display = "block";
    }
}

document.addEventListener("click", removeItem);
