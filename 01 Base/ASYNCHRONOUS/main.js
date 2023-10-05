//task 1:
//Реалізуйте функцію getPromise(message, delay), яка приймає текстове повідомлення та ціле значення затримки (у мс). Функція має повертати Promise , який очікує заданий проміжок часу (використовуючи аргумент затримки ) і вирішується повідомленням .
function getPromise(message, delay) {
  return new Promise(function (resolve, reject) {
    // Використовуємо setTimeout для затримки виконання коду на delay мілісекунд.
    setTimeout(function () {
      resolve(message);
    }, delay);
  });
}

const promise = getPromise("Hello World!", 4000);

promise
  .then(function (message) {
    console.log(message);
  })
  .catch(function (error) {
    console.log(error);
  });

//task 2:
//Реалізуйте функцію calcArrProduct(arr), яка приймає масив чисел. Функція має повертати Promise , який вирішується з добутком елементів масиву, якщо вони мають тип Numbers, або відхиляється з повідомленням "Помилка! Неправильний масив!" якщо хоча б 1 елемент масиву не є числом.
function calcArrProduct(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject("Error! Incorrect array!");
    } else {
      const product = arr.reduce((acc, num) => {
        if (typeof num !== "number") {
          reject("Error! Incorrect array!");
        }
        return acc * num;
      }, 1);
      resolve(product);
    }
  });
}

// Example usage:
const randomValue = Math.floor(Math.random() * 10) + 1;
calcArrProduct([1, 2, 3])
  .then((product) => {
    console.log(product);
    return calcArrProduct([1, 20, randomValue, 0.5]);
  })
  .then((product) => {
    console.log(product === randomValue * 10);
    return calcArrProduct([5, "user2", 7, 12]);
  })
  .then((product) => {
    console.log(product);
  })
  .catch((error) => console.log(error));

//task 3:
//Завершіть наступний асинхронний ланцюжок обіцянок:
new Promise(function (resolve, reject) {
  const userInput = prompt("Будь ласка, введіть число:");
  if (userInput === null) {
    reject("Ви скасували введення.");
  } else {
    const number = parseFloat(userInput);
    if (isNaN(number)) {
      reject("Ви ввели не число.");
    } else {
      resolve(number);
    }
  }
})
  .catch(function (error) {
    return new Promise(function (resolve, reject) {
      const askAgain = function () {
        const userInput = prompt("Будь ласка, введіть число:");
        if (userInput === null) {
          reject("Ви скасували введення.");
        } else {
          const number = parseFloat(userInput);
          if (isNaN(number)) {
            askAgain();
          } else {
            resolve(number);
          }
        }
      };
      askAgain();
    });
  })
  .then(function (result) {
    console.log(result);
  });

//task 4:
//У нас є масиви delaysзатримок у мс. Показати в консолі номери від 0 до delays.length-1з відповідним dalay. Використовуйте функцію delayдля створення Promises у своєму рішенні
const delay_1 = (i, time) =>
  new Promise((resolve) => setTimeout(() => resolve(i), time));

const delays = [300, 200, 100, 150, 500]; // Example delays in ms

const showDelays = async () => {
  const promises = delays.map((delayTime, i) => delay_1(i, delayTime));

  try {
    const results = await Promise.all(promises);

    // Sort results based on the delays
    const sortedResults = results.sort((a, b) => delays[a] - delays[b]);

    sortedResults.forEach((result) => {
      console.log(result);
    });
  } catch (error) {
    console.error(error);
  }
};

showDelays();

//task 5:
//У нас є масиви delaysзатримок у мс. Показувати на консолі числа від 0 до delays.length-1з відповідним далем, АЛЕ показувати числа в правильному порядку. Це означає, що спочатку потрібно показати 0 після затримки,  delays[0]потім показати 1 після додаткової затримки  delays[1]і так далі. Використовуйте функцію delayдля створення Promises у своєму рішенні
const delay = (i, time) =>
  new Promise((resolve) => setTimeout(() => resolve(i), time));

const delayS = [300, 200, 100, 150, 500];
function displayNumber(i) {
  if (i < delayS.lenghth) {
    delay(i, delayS[i])
      .then((resolvedValue) => {
        console.log(resolvedValue);
        displayNumber(i + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
displayNumber(0);
