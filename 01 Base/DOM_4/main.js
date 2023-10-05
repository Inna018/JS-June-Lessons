function displayData() {
  // Отримайте значення полів форми за їх атрибутом name
  const name = document.querySelector('input[name="fio"]').value;
  const phone = document.querySelector('input[name = "phone"]').value;
  const date = document.querySelector('input[name = "birthday"]').value;
  const email = document.querySelector('input[name="email"]').value;

  // Створіть рядок для відображення даних
  const output =
    "ПІБ: " +
    name +
    "<br>Номер телефону: " +
    phone +
    "<br>Дата народження: " +
    date +
    "<br>Електронна пошта: " +
    email;

  // Вставте цей рядок у блок "outBlock"
  document.getElementById("outBlock").innerHTML = output;
}
