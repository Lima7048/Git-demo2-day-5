console.log("Hello world!");

const button = document.getElementById("apply");

function changeColour() {
  console.log("button");
}
console.dir(button);

button.addEventListener("click", function () {
  button.apply();
});

button.addEventListener("click", function () {
  button.changeColour();
});

//function changeColour() {
//document.body.style.button = "blue";
//}
//console.dir(button);

//const colorBtn = document.getElementById("apply");

//colorBtn.addEventListener("click", changeColour);
