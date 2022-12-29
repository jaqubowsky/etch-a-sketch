/* VARIABLES */

const drawingArea = document.querySelector(".draw-area");
let penColor = document.querySelector(".color-selector");
let bgColor = document.querySelector(".background-color-selector");
const eraserBtn = document.querySelector(".eraser-btn");
const clearBtn = document.querySelector(".clear-btn");
let gridSizeSlider = document.querySelector(`input[type="range"]`);
let sliderText = document.querySelector(".grid-text-el");
const toggleGridLinesBtn = document.querySelector(".grid-line-el");
const nodes = document.querySelector(".draw-area").childNodes;

let colorBefore = "#000000";

// SETTING UP DRAWING AREA
sliderText.textContent = `${gridSizeSlider.value} x ${gridSizeSlider.value}`;
createDrawEl(gridSizeSlider.value);

gridSizeSlider.addEventListener("input", function () {
  sliderText.textContent = `${gridSizeSlider.value} x ${gridSizeSlider.value}`;
  createDrawEl(gridSizeSlider.value);
});

// MOUSE DOWN DETECTION

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// BUTTONS FUNCTIONALITY

clearBtn.addEventListener("click", () => {
  eraseAll();
});

toggleGridLinesBtn.addEventListener("click", () => {
  toggleGridLines();
});

eraserBtn.addEventListener("click", () => {
  enableEraser();
});

bgColor.addEventListener("change", () => {
  drawingArea.style.backgroundColor = bgColor.value;
});

// FUNCTIONS

function createDrawEl(size) {
  drawingArea.innerHTML = "";
  drawingArea.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  drawingArea.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (i = 0; i < size * size; i++) {
    const drawEl = document.createElement("div");
    drawEl.classList.add("draw-el");
    drawEl.addEventListener("mouseover", changeColor);
    drawEl.addEventListener("mousedown", changeColor);
    drawingArea.appendChild(drawEl);
  }
}

function eraseAll() {
  drawingArea.innerHTML = "";
  gridSizeSlider.value = 32;
  sliderText.textContent = `${gridSizeSlider.value} x ${gridSizeSlider.value}`;
  createDrawEl(gridSizeSlider.value);
  drawingArea.style.backgroundColor = "";
  bgColor.value = "#ffffff";
}

function changeColor(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  e.target.style.backgroundColor = penColor.value;
}

function toggleGridLines() {
  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].style.border) {
      nodes[i].style.border = "";
    } else {
      nodes[i].style.border = "1px solid black";
    }
  }
}

function enableEraser() {
  if (penColor.value === bgColor.value) {
    penColor.value = colorBefore;
  } else {
    colorBefore = penColor.value;
    penColor.value = bgColor.value;
  }
}
