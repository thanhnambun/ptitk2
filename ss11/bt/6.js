"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    show() {
        console.log(this.brand, this.name, this.price);
    }
}
const myProduct = new Electronics("BMW", 10000, "Mercedes");
myProduct.show();
