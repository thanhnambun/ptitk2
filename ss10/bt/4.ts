class VehicleNew {
  public name: string;
  protected company: string;
  readonly id: number;
  constructor(name: string, company: string, id: number) {
    this.name = name;
    this.company = company;
    this.id = id;
  }
  lg (){
   console.log(`${this.name}, ${this.company},${this.id}`);
  }
}
const employee1 = new Employee("Alice", "ABC Company", 123456789);
employee1.printInfo();