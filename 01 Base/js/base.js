//task 1
let yourLogin = prompt("Enter your login:");
let yourEmail = prompt("Enter your email:");
let yourPassword = prompt("Enter your password:");

alert(
  `Dear ${yourLogin}, your email is ${yourEmail}, your password is ${yourPassword}`
);

//task 2
let dataTypes = {
  String: typeof "JavaScript",
  Number: 71,
  Boolean: true,
  Undefined: undefined,
  Null: null,
  Big_Int: 123n,
};

//task 3
const second = 60;
let secH = 60 * second;
let secD = 24 * secH;
let secM = 31 * secD;

//task 4
let isAdult = confirm("Are you of legal age?");

//task 5
let myName = "Inna";
alert(`My name is ${myName}`);
