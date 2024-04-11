"use strict";
class Vehicle {
    constructor(name, company, year) {
        this.name = name;
        this.company = company;
        this.year = year;
    }
    showInfo() {
        console.log(`${this.name} và ${this.company} và 
    ${this.year}`);
    }
}
let car = new Vehicle("Xe", "Toyota", 2020);
car.showInfo();
