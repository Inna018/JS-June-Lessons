//task 1:
//Напишіть функцію upperCase, яка перевірятиме, чи перший символ у рядку є великим чи ні.
function upperCase(str) {
  const regex = /^[A-Z]/;

  if (regex.test(str)) {
    return "String's starts with uppercase character";
  } else {
    return "String's not starts with uppercase character";
  }
}

console.log(upperCase("regexp"));
console.log(upperCase("RegExp"));
console.log(upperCase("regExp"));

//task 2:
//Напишіть функцію validateEmail(email), яка приймає рядкові дані та перевіряє їх відповідність електронному листу.
//1.Адреса електронної пошти має містити локальну та доменну частини, розділені символом @ .
//2.Локальна частина може містити буквено-цифрові символи (літери AZ , як великі, так і малі, і цифри 0-9 ), а також такі спеціальні символи: ._%+- .
//3.Локальна частина повинна мати хоча б один символ.
//4.Частина домену може містити буквено-цифрові символи (літери AZ , як великі, так і малі, і цифри 0-9 ), а також такі спеціальні символи: .- .
//5.Доменна частина повинна містити принаймні один символ.
//6.Доменна частина має містити крапку (.), щоб відокремити доменне ім’я від домену верхнього рівня (TLD) або розширення домену.
//7.TLD або доменне розширення має складатися з двох або більше літер (як великих, так і малих).
function validateEmail(email) {
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (emailPattern.test(email)) {
    return true;
  } else {
    return false;
  }
}

console.log(validateEmail("user@example.com"));
console.log(validateEmail("invalid-email"));
console.log(validateEmail("12345@domain.co"));
console.log(validateEmail("name@.com"));

//task 3:
//Напишіть регулярний вираз у змінній regex, який поміняє місцями 2 підрядки в тексті рядка.
let regex = /(.*?)\s(.*?)$/;

//task 4:
//Напишіть у змінну регулярний вираз  regex, який виконуватиме перевірку номера банківської картки у форматі 9999-9999-9999-9999. Примітка. Перша цифра може бути від 1 до 9, але не 0.
let regexNew = /^[1-9]\d{3}-\d{4}-\d{4}-\d{4}$/;

//task 5:
// ЗнайНаписати функцію checkLogin(login), яка перевіряє правильність входу. Правильний логін - це рядок від 2 до 10 символів, що містить лише літери, крапки та цифри, число не може бути першим символом. Функція має отримати рядок і повернути об’єкт {isValid: Bolean, numbers : Array of string}із результатом перевірки входу ( isValid) і масивом усіх чисел у вхідному рядку ( numbers), включаючи числа з плаваючою комою.
function checkLogin(login) {
  // Регулярний вираз для перевірки логіна
  const regex = /^[A-Za-z][A-Za-z\d\.]{1,9}$/;

  const numbers = login.match(/(\d+\.\d+|\d+)/g) || [];

  // Перевірка, чи відповідає логін заданим умовам
  const isValid = regex.test(login) && login.length >= 2 && login.length <= 10;

  // Повернути результати у вигляді об'єкта
  return { isValid, numbers };
}

// Приклади використання функції:
const login1 = "user123"; // Неправильний логін
const login2 = "User.12345"; // Правильний логін
const login3 = "123.45"; // Неправильний логін

console.log(checkLogin(login1)); // { isValid: false, numbers: ["123"] }
console.log(checkLogin(login2)); // { isValid: true, numbers: ["12345"] }
console.log(checkLogin(login3)); // { isValid: false, numbers: ["123", "45"] }
