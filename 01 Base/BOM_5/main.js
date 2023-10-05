// Отримання посилань на елементи з HTML за їх ID.
const displayButton = document.getElementById("button");
const quidanceButton = document.getElementById("quidance");
const backstopButton = document.getElementById("backstop");
const withdrawalButton = document.getElementById("withdrawal");

//"mouseover" - при наведенні на кнопку
displayButton.addEventListener("mouseover", function () {
  quidanceButton.innerHTML = "Mouse on me!";
});

//"click" - при натисканні на кнопку
displayButton.addEventListener("click", function () {
  backstopButton.innerHTML = "I was pressed!";
});

//"mouseout" - при відведенні курсора з кнопки
quidanceButton.addEventListener("mouseout", function () {
  withdrawalButton.innerHTML = "Mouse is not on me!";
});
