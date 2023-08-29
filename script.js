const gridContainer = document.getElementById('gridContainer');

// for (let row = 0; row < 2; row++) {
//   for (let col = 0; col < 2; col++) {

//     const gridCell = document.createElement('div');
//     gridCell.className = 'grid-item';

//     // Add a click event listener to the grid item
//     gridCell.addEventListener('mouseover', function() {
//       gridCell.style.backgroundColor = 'black';
//     });

//     // Append the grid item to the grid container
//     gridContainer.appendChild(gridCell);
//    }
// }


function createGrid(size = 4) {
  
  for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
      const gridCell =  document.createElement('div');
      gridCell.className = 'grid-item';
      gridCell.textContent = `${i + 1} , ${j + 1}`;
      gridContainer.appendChild(gridCell);
    }
  }
}


createGrid(5);