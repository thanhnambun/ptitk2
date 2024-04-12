"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Hi, I am ${this.name}`);
    }
}
class Student extends Person {
    constructor(id, name) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Hi, I am ${this.name} and my id is ${this.id}`);
    }
}
let pe = new Student(9876543210, "Abhishek");
pe.displayInfo();
