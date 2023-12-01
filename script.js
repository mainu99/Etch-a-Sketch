const gridContainer = document.querySelector("#container");
let size = 16;
let choice = 1;

function makeGrid(size) {
  gridContainer.innerHTML = ""; // Clear previous cells
  for (let i = 0; i < Math.pow(size, 2); i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gridContainer.appendChild(cell);
  }
}

function setupCellEventListeners() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.setProperty("background-color", choice ? "black" : "white");
    });
  });
}

function clearAllCells() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.setProperty("background-color", "white");
  });
}

document.querySelector("#gridSize").addEventListener("click", () => {
  size = prompt("Choose grid size");
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1em)`;
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1em)`;
  makeGrid(size);
  setupCellEventListeners();
});

document.addEventListener("DOMContentLoaded", () => {
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1em)`;
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1em)`;
  makeGrid(size);
  setupCellEventListeners();
});

document.querySelector("#draw").addEventListener("click", () => {
  choice = 1; // Set choice to 1 for drawing
});

document.querySelector("#erase").addEventListener("click", () => {
  choice = 0; // Set choice to 0 for erasing
});

document.querySelector("#clear").addEventListener("click", () => {
  clearAllCells();
  choice = 1;
});
