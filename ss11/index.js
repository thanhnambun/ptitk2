"use strict";
class User {
    constructor(userName, password, email) {
        this.userName = userName;
        this.password = password;
        this.email = email;
    }
    sayHello() {
        console.log("Hello");
    }
    get getPassword() {
        return this.password;
    }
}
class Admin extends User {
    constructor(userName, password, email, permission) {
        super(userName, password, email);
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.permission = permission;
    }
}
class Animal {
    constructor(name) {
        this.name = name;
    }
    makesoud() {
        console.log("động vật phát ra tiếng kêu.");
    }
}
class dog extends Animal {
    constructor(breed, name) {
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
let dog1 = new dog("tung", "gau");
dog1.makesoud();
dog1.displayInfo();
