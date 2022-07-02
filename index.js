let counter = 1;

function add() {
  // Create element;
  let container = document.querySelector("#container");
  let div = document.createElement("div");
  div.classList.add("new");

  // Set  attributes
  div.style.width = "60px";
  div.style.height = "60px";

  if (counter < 256) {
    counter++;
    window.setTimeout(add, 1);
  }

  // Append the div to the body
  container.appendChild(div);
}
