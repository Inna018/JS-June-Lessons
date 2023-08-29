//task 1:
function sumSliceArray(arr, first, second) {
  if (!Array.isArray(arr)) {
    throw new Error("arr - масив.");
  }

  if (typeof first !== "number" || typeof second !== "number") {
    throw new Error("first та second - числа.");
  }

  if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
    throw new Error(
      "Невірні значення для first та second або вони виходять за межі масиву."
    );
  }

  return arr[first] + arr[second];
}

const myArray = [1, 2, 3, 4, 5, 6];
const firstIndex = 3;
const secondIndex = 5;
const result = sumSliceArray(myArray, firstIndex, secondIndex);
console.log(
  `Сума елементів ${firstIndex}-го та ${secondIndex}-го індексів: ${result}`
);

//task 2:
function checkAge() {
  try {
    let name = prompt("Введіть ваше ім'я:");
    if (!name) {
      throw new Error("The field is empty! Please enter your name");
    }

    let age = parseInt(prompt("Введіть ваш вік:"));
    if (isNaN(age)) {
      throw new EvalError("Ви ввели нечислове значення в полі вік");
    }

    if (age < 18 || age > 70) {
      throw new RangeError(
        "Ваш вік не відповідає допустимому діапазону (18-70)"
      );
    }

    let status = prompt("Введіть ваш статус (адмін, модератор, користувач):");
    if (
      status !== "адмін" &&
      status !== "модератор" &&
      status !== "користувач"
    ) {
      throw new EvalError("Ви ввели неправильне слово в полі статус");
    }

    alert("Ви маєте доступ до перегляду фільму!");
  } catch (error) {
    alert(`Помилка: ${error.name}\nОпис: ${error.message}`);
  }
}
checkAge();

//task 3:
function calcRectangleArea(width, height) {
  if (typeof width !== "number" || typeof height !== "number") {
    throw new Error("Введіть числа");
  }

  const area = width * height;

  if (isNaN(area) || area <= 0) {
    throw new Error("Площу неможливо обчислити.");
  }
  return area;
}

const width = 3;
const height = 5;
const newCalcRectangleArea = calcRectangleArea(width, height);
console.log("Площа прямокутника:", newCalcRectangleArea);

//task 4:
class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = "MonthException";
  }
}
function showMonthName(month) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (month < 1 || month > 12) {
    throw new MonthException("Incorrect month number");
  }
  return months[month - 1];
}
try {
  console.log(showMonthName(5));
  console.log(showMonthName(14));
} catch (error) {
  if (error instanceof MonthException) {
    console.log(error.message);
  } else {
    console.error("Інша помилка:", error.message);
  }
}

//task 5:
function showUser(id) {
  if (typeof id !== "number" || id < 0) {
    throw new Error(`ID не має бути від'ямним: ${id}`);
  }
  return { id };
}

function showUsers(ids) {
  const validUsers = [];

  for (const id of ids) {
    try {
      const user = showUser(id);
      validUsers.push(user);
    } catch (error) {
      console.error(error.message);
    }
  }
  return validUsers;
}

const ids = [7, -12, 44, 22];
const users = showUsers(ids);
console.log(users);
