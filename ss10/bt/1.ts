class Vehicle {
  name: string;
  company: string;
  year: number;
  constructor(name: string, company: string, year: number) {
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
car.showInfo()
