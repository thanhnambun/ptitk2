"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(value) {
        this.speed += value;
    }
    speedUp(value) {
        this.speed -= value;
    }
    showSpeed() {
        console.log(this.speedUp);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
}
const bic = new Bicycle("XYZ Corporation", 510, 13, 10);
bic.showSpeed();
