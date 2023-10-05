//task 1:
//Для заданої сторінки знайдіть всі <h2> з класом head, зробіть для них зелений колір фону, потім серед знайдених елементів знайдіть елементи з класом inner і поставте їм розмір шрифту 35px.
$(function () {
  $("h2.head").css("background-color", "green");
  $("h2.head .inner").css("font-size", "35px");
});

//task 2:
//На HTML-сторінці є посилання <a>. У випадку коли, href починається на https://, потрібно додати посиланню атрибут target="_blank".

$(document).ready(function () {
  $("a[href^='https://']").attr("target", "_blank");
});

//task 3:
//Знайдіть теги <div>, які стоять безпосередньо після <h3> і перемістіть кожен <div>-елемент так, щоб він став безпосередньо над <h3>.
$(document).ready(function () {
  // Пошук усіх div-елементів, які є наступниками h3,
  // і переміщення кожного div перед відповідним h3
  $("h3 + div").each(function () {
    $(this).insertBefore($(this).prev("h3"));
  });
});

//task 4:
//На HTML-сторінці є 6 чекбоксів. Напишіть скріпт, який після того, як користувач позначив будь-які 3 чекбокси, всі чекбокси робить неактивними.
$(document).ready(function () {
  $(".myCheckbox").on("change", function () {
    const count = $(".myCheckbox:checked").length;
    const maxAllowed = 3;
    if (count > maxAllowed) {
      $(this).prop("checked", false);
    }
  });
});
