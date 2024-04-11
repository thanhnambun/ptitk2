class Employee {
  public name: string;
  protected company: string;
  private phone: number;
  constructor(name: string, company: string, phone: number) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }
  printInfo() {
    console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
  }
}
const employee = new Employee("Alice", "ABC Company", 123456789);
employee.printInfo();
