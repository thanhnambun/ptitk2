class Department {
    public readonly id: number;
    private name: string;
    private employees: string[];

    constructor(id: number, name: string, employees: string[]) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }

    get getName(): string {
        return this.name;
    }

    set setName(name: string) {
        this.name = name;
    }

    get getEmployees(): string[] {
        return this.employees;
    }

    set setEmployees(employees: string[]) {
        this.employees = employees;
    }
}
const department = new Department(1, "Nam đẹp trai", ["Alice", "Bob", "Charlie"]);
console.log(department.id);