const body = document.createElement("body");
const main = document.createElement("main");
main.className = "mainClass check item";
const div = document.createElement("div");
div.id = "myDiv";
const p = document.createElement("p");
const text = document.createTextNode("First paragraph");

p.appendChild(text);
div.appendChild(p);
main.appendChild(div);
body.appendChild(main);

// Додавання body до HTML-сторінки
document.documentElement.appendChild(body);
