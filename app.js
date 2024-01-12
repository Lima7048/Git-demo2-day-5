const button = document.getElementById("apply");
console.dir(button);
function changeColour() {
  document.body.style.button = "blue";
}

button.addEventListener("click", changeColour);
