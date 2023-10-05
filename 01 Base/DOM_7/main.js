const text = `ABCDEFGHIJKLMNOPQRSTUVWXYZ⁂•~&#`;

class Marker {
  #color;
  #inkQuantity;

  constructor(color, inkQuantity) {
    this.#color = color;
    this.#inkQuantity = inkQuantity;
  }

  get color() {
    return this.#color;
  }

  get inkQuantity() {
    return this.#inkQuantity;
  }

  set inkQuantity(value) {
    this.#inkQuantity = value;
  }

  printChar(char) {
    document.write(
      `<span style="color: ${this.#color}; opacity: ${
        this.#inkQuantity
      };"> ${char} </span>`
    );
    this.#inkQuantity -= 0.05;
  }

  print(text) {
    text.split("").forEach((char) => {
      this.printChar(char);
    });
  }
}

class RefillableMarker extends Marker {
  constructor(color, inkQuantity) {
    super(color, inkQuantity);
  }

  refill() {
    this.inkQuantity += 0.05;
  }

  print(text) {
    text.split("").forEach((char) => {
      while (this.inkQuantity < 1) {
        this.refill();
      }
      this.printChar(char);
      this.inkQuantity -= 0.05;
    });
  }
}

let marker = new Marker("#FFA500", 1);
marker.print(text);

let marker2 = new Marker("#ff0000", 0.8);
marker2.print(text);

let refillableMarker = new RefillableMarker("#FF8C00", 1);
refillableMarker.print(text);

let refillableMarker2 = new RefillableMarker("#ff0000", 0.2);
refillableMarker2.print(text);
