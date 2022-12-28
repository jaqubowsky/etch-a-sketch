/* CONSTANTS */

const drawingArea = document.querySelector(".draw-area");
const penColor = document.querySelector(".color-selector");
const bgColor = document.querySelector(".background-color-selector");
const eraserBtn = document.querySelector(".eraser-btn");
const clearBtn = document.querySelector(".clear-btn");
const gridSizeSlider = document.querySelector(`input[type="range"]`);
const sliderText = document.querySelector(".grid-text-el");
const toggleGridLinesBtn = document.querySelector(".grid-line-el");

// SETTING UP DRAWING AREA

createGrid(16);
createDrawEl(16);

const allDrawEl = document.querySelectorAll(".draw-el");

allDrawEl.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (e.buttons == 1 || e.buttons == 3) {
      item.style.backgroundColor = penColor.value;
    }
  });
});

// BUTTONS FUNCTIONALITY

clearBtn.addEventListener("click", () => {
  eraseAll();
});

eraserBtn.addEventListener("toggle", () => {
  allDrawEl.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "white";
    });
  });
});

// ABLE TO CHANGE DEAFULT BACKGROUND COLOUR

bgColor.addEventListener("change", () => {
  drawingArea.style.backgroundColor = bgColor.value;
});

// FUNCTIONS

function createGrid(num) {
  drawingArea.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
}

function createDrawEl(num) {
  for (i = 0; i < num ** 2; i++) {
    const drawEl = document.createElement("div");
    drawEl.classList.add("draw-el");
    drawingArea.appendChild(drawEl);
  }
}

function eraseAll() {
  allDrawEl.forEach((item) => {
    item.removeAttribute("style");
  });
  drawingArea.style.backgroundColor = "";
  bgColor.value = "#ffffff"
}
