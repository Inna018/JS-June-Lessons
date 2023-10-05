//task 1:
function sumSliceArray(arr, first, second) {
  first = parseInt(first);
  second = parseInt(second);

  if (isNaN(first) || isNaN(second)) {
    throw new Error("Invalid input. Please enter number value!");
  }

  if (first >= arr.length || second >= arr.length) {
    throw new Error("Invalid input. Indexes out of array range");
  }
  return arr[first - 1] + arr[second - 1];
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(sumSliceArray(arr, 3, 5));

try {
  const res = sumSliceArray(arr, 3, 11);
  console.log(res);
} catch (error) {
  console.log("Error: ", error.message);
}

//task 2:

function checkAge() {
  const name = prompt("Enter your name:");
  const age = prompt("Enter your age:");
  const status = prompt("Enter your status (admin, moderator, user):");

  if (!name || !age || !status) {
    throw new Error("The field is empty!");
  }

  const parsedAge = parseInt(age, 10);

  if (isNaN(parsedAge)) {
    throw new TypeError("Age must be a number");
  }

  if (parsedAge < 18 || parsedAge > 70) {
    throw new RangeError("You are not within the age range to watch the movie");
  }

  if (status !== "admin" && status !== "moderator" && status !== "user") {
    throw new EvalError("Invalid status entered");
  }

  alert("You can watch a movie!");
}

try {
  setInputValues("Bob", "18", "user");
  checkAge();
} catch (error) {
  console.log(error.name);
}

try {
  setInputValues("Bob", "ten", "user");
  checkAge();
} catch (error) {
  console.log(error.name);
}

try {
  setInputValues("Bob", "22", "guest");
  checkAge();
} catch (error) {
  console.log(error.name);
}

//task 3:
function calcRectangleArea(width, height) {
  if (typeof width !== 'number' || typeof height !== 'number') {
    throw "Parameter is not a number";
  }
  return width * height;
}

try{
  
}