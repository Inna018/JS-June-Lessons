//task 1:
let list = document.getElementById("list");
let newList = document.getElementsByTagName("li");

const items = [];
for (let i = 0; i < newList.length; i++) {
  items.push(newList[i].textContent);
}
let array =
  items[0] + "," + items[4] + "," + items[1] + "," + items[3] + "," + items[2];
alert("Результат виводу:" + array);
