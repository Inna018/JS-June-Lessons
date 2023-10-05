// Отримуємо посилання на елементи за їх ID або тегами
const header = document.querySelector("h1");
const paragraphs = document.querySelectorAll("#myDiv p");
const spanElement = document.querySelector("span");
const ulListItems = document.querySelectorAll("#myList li");
const lastParagraph = ulListItems[ulListItems.length - 3];

// Застосовуємо стилі до елементів
header.style.background = "aquamarine";

paragraphs[0].style.fontWeight = "bold";
paragraphs[1].style.color = "red";
paragraphs[2].style.textDecoration = "underline";
paragraphs[3].style.fontStyle = "italic";

lastParagraph.textContent = "Makemehorizontal!";
spanElement.style.display = "none";
ulListItems[1].style.display = "none";
ulListItems[2].style.display = "none";
