"use strict";
class VehicleNew {
    constructor(name, company, id) {
        this.name = name;
        this.company = company;
        this.id = id;
    }
    lg() {
        console.log(`${this.name}, ${this.company},${this.id}`);
    }
}
const employee1 = new Employee("Alice", "ABC Company", 123456789);
employee1.printInfo();
