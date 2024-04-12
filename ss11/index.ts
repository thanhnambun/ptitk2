class User {
  userName: string;
  protected password: string | number;
  email: string;
  constructor(userName: string, password: string | number, email: string) {
    this.userName = userName;
    this.password = password;
    this.email = email;
  }
  sayHello(): void {
    console.log("Hello");
  }
  get getPassword(): string | number {
    return this.password;
  }
}

class Admin extends User {
  permission: string;
  constructor(
    userName: string,
    password: string | number,
    email: string,
    permission: string
  ) {
    super(userName, password, email);
    this.userName = userName;
    this.password = password;
    this.email = email;
    this.permission = permission;
  }
}
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makesoud() {
    console.log("động vật phát ra tiếng kêu.");
  }
}
class dog extends Animal {
  breed: string;
  constructor(breed: string, name: string) {
    super("name");
    this.breed = "breed";
  }

  makesoud() {
    console.log("gâu gâu");
    super.makesoud();
  }
  displayInfo() {
    console.log(`${this.breed},${this.name}`);
  }
}
let dog1 = new dog("tung","gau")
dog1.makesoud()
dog1.displayInfo()