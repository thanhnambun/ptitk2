interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: string;
}

const employee: Employee = {
    name: "Alice",
    age: 30,
    employeeId: "EMP123"
};

console.log(employee);
