//task 1:
class Circle {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }

  getLength() {
    return 2 * Math.PI * this.radius;
  }

  static getLengthFromRadius(radius) {
    return 2 * Math.PI * radius;
  }

  getCopy() {
    return new Circle({ x: this.center.x, y: this.center.y }, this.radius);
  }

  static createCircle(x, y, radius) {
    return new Circle({ x, y }, radius);
  }

  checkPointInside(point) {
    const x = point.x;
    const y = point.y;
    const centerX = this.center.x;
    const centerY = this.center.y;
    const radius = this.radius;

    const distance = Math.sqrt((x - centerX) * 2 + (y - centerY) * 2);
    const isInside = distance <= radius;
    return isInside;
  }

  toString() {
    return `Circle with center in ${this.center.x},${this.center.y} and radius ${this.radius}`;
  }
}

//task 2:
function propsCount(currentObject) {
  const propertyNames = Object.keys(currentObject);
  return propertyNames.length;
}

const aboutMe = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(propsCount(aboutMe));
//const count = propsCount(myObject);
//console.log(count);

//task 3:
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return `${this.surname} ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, surname, year, course) {
    super(name, surname);
    this.yearIntroduction = year;
  }
  getFullName(middleName) {
    if (middleName === undefined) {
      middleName = "Ivanov";
    }
    return `${this.surname} ${this.name} ${middleName}`;
  }
  getCourse() {
    const currentYear = new Date().getFullYear();
    const course = currentYear - this.yearIntroduction + 1;
    return Math.min(6, Math.max(1, course));
  }
}

let freshman = new Person("Maks", "Volkov");
console.log(freshman.getFullName());

let sophomore = new Student("Kate", "Romanshuk", 2020);
console.log(sophomore.getFullName());
console.log("Поточний курс:" + sophomore.getCourse());

//task 4:
class Marker {
  #color;
  #ink = 100;

  constructor(color) {
    this.#color = color;
  }

  get color() {
    return this.#color;
  }

  set ink(level) {
    this.#ink = level;
  }

  get inkLevel() {
    return this.#ink;
  }

  print(text) {
    for (const char of text) {
      if (this.#ink >= 10) {
        console.log(char);
        if (char !== " ") {
          this.#ink -= 10;
        }
      }
    }
  }
}

class RefillableMarker extends Marker {
  refill() {
    this.ink = 100; // Refill the ink to 100%
  }
}

//task 5:
class Worker {
  #fullName;
  #dayRate;
  #workingDays;
  #experience;

  constructor(fullName, dayRate, workingDays, experience) {
    this.#fullName = fullName;
    this.#dayRate = dayRate;
    this.#workingDays = workingDays;
    this.#experience = experience;
  }

  getSalary() {
    return this.#dayRate * this.#workingDays;
  }

  getSalaryWithExperience() {
    return this.#dayRate * this.#workingDays * this.#experience;
  }

  get fullName() {
    return this.#fullName;
  }

  set fullName(value) {
    this.#fullName = value;
  }

  get dayRate() {
    return this.#dayRate;
  }

  set dayRate(value) {
    this.#dayRate = value;
  }

  get experience() {
    return this.#experience;
  }

  set experience(value) {
    this.#experience = value;
  }

  get workingDays() {
    return this.#workingDays;
  }

  addWorkingDays(n) {
    this.#workingDays += n;
  }

  static sortBySalary(workers) {
    return workers.slice().sort((a, b) => a.getSalary() - b.getSalary());
  }
}

//Email address:
//[A-Za-z0-9][\w\.-]{3,}[A-Za-z0-9]\@\w+\.\w+

// Word with upper letter:
// [A-Z][a-z]+!*
