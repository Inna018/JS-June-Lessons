//task 1:
function createArray(start, end) {
  if (typeof start !== "number" || typeof end !== "number" || start > end) {
    return [];
  }

  const result = [];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}

const newArray = createArray(1, 5);
console.log(newArray);

//task 2:
let a = 1;
let b = 10;

for (let i = a; i <= b; i++) {
  for (let j = 0; j < i - a + 1; j++) {
    console.log(i);
  }
}

//task 3:
function randArray(k) {
  let numbers = [];

  for (let i = 0; i < k; ++i) {
    let value = Math.floor(Math.random() * 500);
    numbers.push(value);
  }

  for (const number of numbers) {
    console.log(number);
  }
}

const k = 5;
randArray(k);

//task 4:
function compact(arr1) {
  const uniqueValues = [...new Set(arr1)];
  return uniqueValues;
}
const arr1 = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arr1);
console.log(arr2);

//task 5:
function splitArrayByType(arr) {
  const numbersArray = [];
  const stringsArray = [];

  function arrayNew(arr) {
    for (const item of arr) {
      if (typeof item === "number") {
        numbersArray.push(item);
      } else if (typeof item === "string") {
        stringsArray.push(item);
      } else if (Array.isArray(item)) {
        arrayNew(item);
      }
    }
  }
  arrayNew(arr);
  return [numbersArray, stringsArray];
}

let arr = [
  5,
  "Limit",
  12,
  "a",
  "3",
  99,
  2,
  [2, 4, 3, "33", "a", "text"],
  "strong",
  "broun",
];
let [numbersArray, stringsArray] = splitArrayByType(arr);

console.log(numbersArray);
console.log(stringsArray);

//task 6:
function calc(a, b, op) {
  switch (op) {
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return a / b;
    default:
      return a + b;
  }
}
console.log(calc(10, 3, 1));
console.log(calc(10, 3, 15));

//task 7:
function findUnique(arr) {
  const uniqueNew = new Set(arr);

  return arr.length === uniqueNew.size;
}

const arr3 = [1, 2, 3, 4, 5];
const arr4 = [1, 2, 2, 3, 4, 5];

console.log(findUnique(arr3));
console.log(findUnique(arr4));
