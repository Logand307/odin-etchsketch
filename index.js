// let counter = 1;

// let answer = parseInt(
//   prompt("How many squares you would like to have in your Etch-A-Sketch grid? ")
// );

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");


defaultGrid();
//Creates a default grid sized 16x16 
function defaultGrid() {
  makeRows(16);
  makeColumns(16);
}

//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

  //Creates rows
  for (let r = 0; r < rowNum; r++) {
      let row = document.createElement("div");
      container.appendChild(row).className = "gridRow";
  };
};

//Creates columns
function makeColumns(cellNum) {
  for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < cellNum; j++) {
          let newCell = document.createElement("div");
          rows[j].appendChild(newCell).className = "cell";
          
      };

  };
};
