const gridContainer = document.querySelector("#container");

let cell = "";
let size = 16;

function makeGrid(size = 16) {
  for (let i = 0; i < Math.pow(size, 2); i++) {
    cell = document.createElement("div");
    cell.classList.add("cell");
    gridContainer.appendChild(cell);
  }
}

document.querySelector("#gridSize").addEventListener("click", () => {
  size = prompt("Choose grid size");
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1em)`;
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1em)`;
  reset();
  const gridCreationPromise = new Promise((resolve) => {
    makeGrid(size);
    // Resolve the promise after the makeGrid operation is complete
    resolve();
  });

  // Use .then() to execute code after the promise is resolved
  gridCreationPromise.then(() => {
    cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.addEventListener("mouseover", () => {
        cell.style.setProperty("background-color", "black");
      });
    });
  });
});

makeGrid();

let cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("mouseover", () => {
    cell.style.setProperty("background-color", "black");
  });
});

function reset() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    gridContainer.removeChild(cell);
  });
}
