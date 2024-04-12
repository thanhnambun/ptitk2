class Employee {
  name: string;
  company: string;
  phone: number;
  constructor(name: string, company: string, phone: number) {
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
  teamSize: number;
  constructor(teamSize: number, name: string, company: string, phone: number) {
    super(name, company, phone);
    this.teamSize = teamSize;
  }
  printInfo(): void {
    super.printInfo();
    console.log("Team Size:", this.teamSize);
  }
}

let emp1 = new Employee("Abhishek", "TCS", 9876543210);
const mgr1 = new Manager(10, "XYZ Corporation", "Jane Smith", 13);
mgr1.printInfo();
