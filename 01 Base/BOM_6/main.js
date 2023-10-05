// Отримуємо посилання на HTML-елемент, в який будемо вставляти інформацію
const screenInfo = document.getElementById("screenNew");

function updatScreenInfo() {
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const screenHeight =
    window.innerHeight ||
    document.documentElement.clientWidth ||
    documment.body.clientWidth;

  const screenText = `Width: ${screenWidth}, Height: ${screenHeight}`;

  screenInfo.textContent = screenText;
}

// Викликаємо функцію для початкового відображення інформації
updatScreenInfo();

// Додаємо обробник події "resize" до об'єкта window, який буде викликатися при зміні розміру вікна браузера
window.addEventListener("resize", updatScreenInfo);
