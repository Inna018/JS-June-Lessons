//task 1:
//Створіть http-сервер Node.js, який буде слухати запити на порт 5000 на локальній машині. Сервер повертає сторінку, що містить ім’я поточного користувача операційної системи, тип операційної системи, час безвідмовної роботи системи в хвилинах (використовуйте модуль os), поточну робочу директорію та назву файлу сервера (використовуйте модуль шляху ).
// const http = require("http");
// const os = require("os");
// const path = require("path");

// const server = http.createServer(function (request, response) {
//   response.writeHead(200, { "Content-Type": "text/html" });

//   response.write("<h2>System Information</h2>");
//   response.write("<p>Current user name: " + os.userInfo().username + "</p>");
//   response.write("<p>System uptime: " + (os.uptime() / 60).toFixed(2) + " minutes</p>");
//   response.write("<p>Current working directory: " + process.cwd() + "</p>");
//   response.write("<p>Server file name: " + path.basename(__filename) + "</p>");

//  // Включити data.os безпосередньо як рядок
//   response.write("<p>Operating System: " + os.type() + "</p>");

//  // Включити data.os безпосередньо як рядок/ Включіть «Інформацію про систему» ​​безпосередньо як рядок
//   response.write("<p>" + 'System information' + "</p>");

//   response.end();
// });

// server.listen(5000, "127.0.0.1", () => {
//   console.log("Server running at http://127.0.0.1:5000/ ...");
// });

//task 2:
//Створіть свій власний модуль personalmodule.js , який містить функцію getMessage(username) , яка приймає ім’я користувача системи та працює з поточним часом і, залежно від часу доби, повертає повідомлення з привітанням користувача (' { g reeting}, {ім’я користувача} ').
// Доброго ранку (05:00-12:00)
// Доброго дня (12:00-18:00)
// Доброго вечора (18:00-23:00)
// На добраніч (23:00-05:00)
// Щоб експортувати змінні модуля або функції назовні, ви можете використовувати об’єкт module.exports .
// Створіть http-сервер Node.js, який буде слухати запити на порт 8 000  на локальній машині, і використовуючи функціональні можливості розробленого модуля, повертайте наступну сторінку як відповідь:

// Перевірка, чи поточний час знаходиться в заданому інтервалі
function isTimeInRange(startTime, endTime) {
  const now = new Date();
  const currentHour = now.getHours();
  return currentHour >= startTime && currentHour < endTime;
}

// Функція, яка генерує привітання відповідно до часу доби
function getMessage(username) {
  let greeting = "Hello";
  if (isTimeInRange(5, 12)) {
    greeting = "Good morning";
  } else if (isTimeInRange(12, 18)) {
    greeting = "Good afternoon";
  } else if (isTimeInRange(18, 23)) {
    greeting = "Good evening";
  } else {
    greeting = "Good night";
  }
  return `${greeting}, ${username}`;
}

module.exports = { getMessage };
const http = require("http");
const greetingModule = require("./personalmodule");
const os = require("os");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  const userName = os.userInfo().username;
  const greetingMessage = greetingModule.getMessage(userName);

  // Створіть об'єкт `data` і додайте до нього потрібні дані, включаючи `data.date`
  //   const data = {
  //   date: "потрібний рядок", // Замініть це на потрібне значення
  //   username: userName,
  // };
  // Перетворення об'єкта `data` у JSON
  const jsonData = JSON.stringify(data);

  res.write("<h2>Greeting Page</h2>");
  res.write(`<p>${greetingMessage}</p>`);
  res.write(`<p>${jsonData}</p>`); // Виведіть дані у вигляді JSON
  res.end();
});

server.listen(8000, "127.0.0.1", () => {
  //console.log("Server running at http://127.0.0.1:8000/");
});
