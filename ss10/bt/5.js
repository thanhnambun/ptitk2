"use strict";
class Department {
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    get getEmployees() {
        return this.employees;
    }
    set setEmployees(employees) {
        this.employees = employees;
    }
}
const department = new Department(1, "Nam đẹp trai", ["Alice", "Bob", "Charlie"]);
console.log(department.id);
