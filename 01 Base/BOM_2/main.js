// Визначення функції changeCSS
function changeCSS(elementId, propertyName, propertyValue) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style[propertyName] = propertyValue;
  }
}

// Визначення функції changeStyle
function changeStyle() {
  changeCSS("text", "color", "orange");
  changeCSS("text", "font-size", "20px");
  changeCSS("text", "font-family", "Comic Sans MS");
}

// Додавання обробника подій для кнопки
const changeStyleButton = document.getElementById("changeStyleButton");
if (changeStyleButton) {
  changeStyleButton.addEventListener("click", changeStyle);
}
