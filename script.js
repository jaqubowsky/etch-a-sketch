// SETTING UP DRAWING AREA

const drawingArea = document.querySelector(".draw-area");
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

createGrid(16);
createDrawEl(16);

const allDrawEl = document.querySelectorAll(".draw-el");

allDrawEl.forEach((item, color) => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = color;
  });
});
