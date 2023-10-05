//task 1:
//Змініть наведений нижче код, щоб отримати значення з об’єкта namesза допомогою призначення деструктуризації.
//Змініть наведений нижче код, щоб отримати значення з об’єкта namesза допомогою призначення деструктуризації.
// * names.firstу змінну fзі значенням за замовчуванням «Назва №1»;
// * names.secondу змінну sзі значенням за замовчуванням «Назва №2»;
// * names.third у змінну t зі значенням за замовчуванням «Назва №3».
const names = {
  first: "Tom",
  second: "Sam",
  thrid: "Ray",
};

const {
  first: f = "Name №1",
  second: s = "Name №2",
  thrid: t = "Name №3",
} = names;

console.log(names);
console.log(f);
console.log(s);
console.log(t);

//task 2:
//У вас є об’єкт dataіз двома властивостями namesта ages.
//namesі agesмасиви ara з 3 елементами в кожному. Використовуючи присвоєння деструктуризації, збережіть у змінних age1, age2, age3, name1, name2, name3усі значення dataоб’єкта.
let data = { names: ["Sam", "Tom", "Ray", "Bob"], ages: [20, 24, 22, 26] };
let {
  ages: [age1, age2, age3],
  names: [name1, name2, name3],
} = data;

console.log(age1);
console.log(age2);
console.log(age3);

console.log(name1);
console.log(name2);
console.log(name3);

//task 3:
//Функція Write mul(), яка приймає будь-яку кількість параметрів різних типів і повертає добуток параметрів типу Number .
//Якщо серед аргументів немає числових параметрів, 0має бути повернуто.
function mul(...args) {
  // Фільтруємо параметри за типом (число)
  const numbers = args.filter((arg) => typeof arg === "number");

  // Перевіряємо, чи є хоча б одне число
  if (numbers.length === 0) {
    console.log("немає чисел");
    return 0;
  }

  // Обчислюємо добуток чисел
  const result = numbers.reduce((acc, num) => acc * num, 1);
  return result;
}

// Приклад використання функції
const product = mul(2, "dfgg", 4, 4, "qwe");
console.log(product);

//task 4:
//Змініть код так, щоб він bindне використовувався, але функціональність залишилася такою ж.
let server = {
  data: 0,
  convertToString: function (callback) {
    // Змінено на звичайну функцію, а не стрілкову
    callback(() => {
      return this.data + "";
    });
  },
};
let client = {
  server: server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function () {
    // Змінено на звичайну функцію, а не стрілкову
    return (callback) => {
      this.result = callback();
    };
  },
};

client.calc(42);
console.log(client.result); // Виведе "42"

//task 5:
//За допомогою наведеного нижче коду створюється масив за допомогою циклу, і в масив записуються три функції. Логіка роботи функцій проста, значення лічильника в момент створення функції виводиться на консоль.
//Код виглядає логічно, але якщо запустити цей код без змін, число 3 буде виводитися на консоль у всіх викликах функцій.
//Використовуючи механізм закриття , змініть код, щоб вивести правильні числа. Цю проблему можна вирішити, замінивши varна let, але в цьому завданні ключове слово letне допускається.
var arr = [];

for (var i = 0; i <= 2; i++) {
  arr[i] = (function (index) {
    return function () {
      console.log(index);
    };
  })(i);
}

arr[0](); // Виведе 0
arr[1](); // Виведе 1
arr[2](); // Виведе 2

//task 6:
//Напишіть функцію "mapBuilder (keysArray, valuesArrays)", яка отримає два масиви однакової довжини. Використовуючи ці масиви, функція повинна створити об’єкт типу «Map», ключами якого є значення з першого масиву, а значеннями Map – значення з другого масиву. Після цього функція повертає цей об’єкт Map.
function mapBuilder(arr1, arr2) {
  const newMap = new Map();
  for (let i = 0; i < arr1.length; i++) {
    newMap.set(arr1[i], arr2[i]);
  }
  return newMap;
}

let map = mapBuilder([1, 2, 3, 4], ["div", "span", "b", "i"]);
console.log(map instanceof Map);
console.log(map.get(2));
console.log(map.size);
