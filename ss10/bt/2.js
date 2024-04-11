"use strict";
class Student {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    setStudent(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
}
let std = new Student("Abhishek", 21, "john.c.breckinridge@altostrat.com");
let std1 = new Student("Abhishekl", 211, "john.c.breckinridge@altostrat.com");
let stdList = [];
stdList.push(std);
stdList.push(std1);
