export class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    const cloneSymbol = Symbol();
    const clonedCar = new Car(this._brand, this._motor, this._color);
    clonedCar[cloneSymbol] = true;
    return clonedCar;
  }
}

