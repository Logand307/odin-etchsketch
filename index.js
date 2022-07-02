let counter = 1;

let answer = parseInt(
  prompt("How many squares you would like to have in your Etch-A-Sketch grid? ")
);

function add() {
  // Create element;
  let container = document.querySelector("#container");
  let div = document.createElement("div");
  div.classList.add("new");
  div.id = "grid";

  // Set  attributes
  div.style.width = "30px";
  div.style.height = "30px";

  if (counter < answer) {
    counter++;
    window.setTimeout(add, 0);
  }

  // Append the div to the body
  container.appendChild(div);
}

add();
