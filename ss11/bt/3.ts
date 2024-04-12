class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  displayInfo() {
    console.log(`Hi, I am ${this.name}`);
  }
}
class Student extends Person {
  id: number;
  constructor(id: number, name: string) {
    super(name);
    this.id = id;
  }
  displayInfo() {
    super.displayInfo();
    console.log(`Hi, I am ${this.name} and my id is ${this.id}`);
  }
}
let pe = new Student(9876543210, "Abhishek");
pe.displayInfo()
