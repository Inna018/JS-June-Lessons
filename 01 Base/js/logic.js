//task 1:
const validateAge = (age) => {
  if (age >= 18) {
    console.log("You are of legal age");
  } else {
    console.log("You are too young");
  }
};
validateAge(12);
validateAge(22);

//task 2:
const filterMostOftenNumber = (numsArr) => {
  if (numsArr.length === 0) {
    return [];
  }

  let mostFrequentNumber;
  let maxFrequency = 0;
  const numberFrequencyMap = new Map();

  for (const num of numsArr) {
    if (numberFrequencyMap.has(num)) {
      numberFrequencyMap.set(num, numberFrequencyMap.get(num) + 1);
    } else {
      numberFrequencyMap.set(num, 1);
    }

    if (numberFrequencyMap.get(num) > maxFrequency) {
      mostFrequentNumber = num;
      maxFrequency = numberFrequencyMap.get(num);
    }
  }

  const newArrayWithoutMostFrequent = numsArr.filter(
    (num) => num !== mostFrequentNumber
  );

  return newArrayWithoutMostFrequent;
};
const inputArray = [4, 5, 2, 1, 6, 3, 5, 2, 5];
const result = filterMostOftenNumber(inputArray);
console.log(result);

// tassk 3:
const primeNumbers = (numsArr) => {
  const primeArr = numsArr.filter((number) => {
    return (
      number % 3 === 0 ||
      number % 5 === 0 ||
      number % 7 === 0 ||
      number % 11 === 0 ||
      number % 13 === 0
    );
  });
  return primeArr;
};
const numsArr = [13, 2, 4, 7];
const prime = primeNumbers(numsArr);
console.log(prime);

//task 4:
const triangleArea = (a, b, c) => {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
    return "Incorrect data";
  } else return area.toFixed(3);
};

const a = 1;
const b = 2;
const c = 3;
const newArea = triangleArea(a, b, c);
console.log(newArea);

//task 5:
const greetings = (time) => {
  let message;
  if (time >= 23 || time < 5) {
    message = "Good night";
  } else if (time >= 5 && time < 11) {
    message = "Good morning";
  } else if (time >= 11 && time < 17) {
    message = "Good afternoon";
  } else if (time >= 17 && time < 23) {
    message = "Good evening";
  } else {
    message = "Error";
  }

  return message;
};
const time = 23;
const newTime = greetings(time);
console.log(newTime);

//task 6:
/*Вася працює програмістом і отримує 50$ за кожні 100 рядків коду(99 рядків - 0$, 199 рядків - 50$). За кожне третє запізнення Васю штрафують на 20$. Реалізувати меню :
-користувач вводить бажаний дохід Васі і кількість запізнень, порахувати, скільки рядків коду йому треба написати
-користувач вводить кількість рядків коду, написану Васею, і бажаний обсяг коштів. Порахувати, скільки разів Вася може запізнитися.
-користувач вводить кількість рядків коду і кількість запізнень, визначити, скільки грошей заплатять Васі і чи заплатять взагалі.*/

let rate = 50; // Оплата за кожні 100 рядків коду
let latePenalty = 20; // Штраф за кожне третє запізнення
let inCome;

while (true) {
  console.log("Меню:");
  console.log("1. Розрахувати, скільки рядків коду Вася має написати");
  console.log("2. Розрахувати, скільки разів Вася може запізнитися");
  console.log(
    "3. Розрахувати, скільки грошей Вася отримає та чи заплатять взагалі"
  );
  console.log("4. Вийти з програми");

  const choice = parseInt(prompt("Виберіть опцію (1/2/3/4):"));

  switch (choice) {
    case 1:
      const income = parseInt(prompt("Введіть бажаний дохід Васі:"));
      const lateCountForLines = parseInt(
        prompt("Введіть кількість запізнень:")
      );
      const linesOfCodeRequired = Math.ceil((income / rate) * 100);
      alert(`Вася має написати приблизно ${linesOfCodeRequired} рядків коду.`);
      break;

    case 2:
      const linesOfCodeWritten = parseInt(
        prompt("Введіть кількість рядків коду, написану Васею:")
      );
      const desiredIncome = parseInt(prompt("Введіть бажаний обсяг коштів:"));
      const lateCountAllowed =
        Math.floor((desiredIncome / rate) * 100) - linesOfCodeWritten;
      alert(`Вася може запізнитися ще приблизно ${lateCountAllowed} разів.`);
      break;

    case 3:
      const linesOfCode = parseInt(prompt("Введіть кількість рядків коду:"));
      const lateCountForPayment = parseInt(
        prompt("Введіть кількість запізнень:")
      );
      const inCome = Math.floor(linesOfCode / 100) * rate;
      const penalty = lateCountForPayment * latePenalty;
      if (penalty >= inCome) {
        alert("Вася не отримає грошей через запізнення.");
      } else {
        const payment = inCome - penalty;
        alert(`Вася отримає $${payment} за ${linesOfCode} рядків коду.`);
      }
      break;

    case 4:
      alert("Дякую за використання програми!");
      break;

    default:
      alert("Некоректний вибір. Будь ласка, виберіть опцію від 1 до 4.");
      break;
  }
}
