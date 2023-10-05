const openWindow = window.open("", "", "width = 300, height = 300");

setTimeout(function () {
  openWindow.resizeTo(500, 500);
}, 2000);

setTimeout(function () {
  openWindow.moveTo(200, 200);
}, 4000);

setTimeout(function () {
  openWindow.close();
}, 6000);
