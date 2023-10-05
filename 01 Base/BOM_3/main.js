// Визначення функції changeCSS
function changeCSS(elementId, propertyName, propertyValue) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style[propertyName] = propertyValue;
  }
}

let isKeyPressed = false;

function changeStyleFirst() {
  changeCSS("main", "background", "blue");
}

function changeStyleSecond() {
  changeCSS("main", "background", "pink");
}

function changeStyleThird(event) {
  if (event.key === "o" && !isKeyPressed) {
    isKeyPressed = true;
    changeCSS("main", "background", "brown");
  }
}

function changeStyleFourth() {
  changeCSS("main", "background", "white");
  isKeyPressed = false;
}

function changeStyleFound() {
  changeCSS("link", "background", "yellow");
}

const change = document.getElementById("change");
const changeStyleNew = document.getElementById("changeStyleNew");
const changeStyleButton = document.getElementById("changeStyleButton");
const link = document.getElementById("link");

if (change && changeStyleNew && changeStyleButton && link) {
  change.addEventListener("click", changeStyleFirst);
  changeStyleNew.addEventListener("dblclick", changeStyleSecond);
  changeStyleButton.addEventListener("keydown", changeStyleThird);
  changeStyleButton.addEventListener("keyup", changeStyleFourth);
  link.addEventListener("mouseover", changeStyleFound);
  link.addEventListener("mouseout", function () {
    changeCSS("link", "background", "white");
  });
}
