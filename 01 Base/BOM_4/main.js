// Отримання посилань на елементи з HTML за їх ID.
const selectElement = document.getElementById("newList");
const deleteButton = document.getElementById("button");


button.addEventListener("click", function () {
  // Отримання індексу обраного елемента випадаючого списку.
  const selectedIndex = selectElement.selectedIndex;
  if (selectedIndex >= 0) {
    selectElement.remove(selectedIndex);
  }
});
