"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(this.name);
        console.log(this.company);
        console.log(this.phone);
    }
}
class Manager extends Employee {
    constructor(teamSize, name, company, phone) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log("Team Size:", this.teamSize);
    }
}
let emp1 = new Employee("Abhishek", "TCS", 9876543210);
const mgr1 = new Manager(10, "XYZ Corporation", "Jane Smith", 13);
mgr1.printInfo();
