function showMessage() {
  alert("Ви щось бажаєте замовити?");
}

function highlightRed() {
  this.style.filter = "brightness(1.2)";
}

function highlightGreen() {
  this.style.filter = "brightness(1.5)";
}

function removeHighlight() {
  this.style.filter = "brightness(1)";
}

function zoomImage(image) {
  image.classList.toggle("double-clicked");
}
