const circleElements = document.querySelectorAll(".circle");

circleElements.forEach(function (element) {
  const dataAnimValue = element.getAttribute("data-anim");
  element.classList.add(dataAnimValue);
});
