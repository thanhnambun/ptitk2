"use strict";
class Shape1 {
    calculateArea() {
        return 0;
    }
    calculatePerimeter() {
        return 0;
    }
}
class Rectangle1 extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
class Circle1 extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
const hinhvuong = new Rectangle1(5, 3);
const hinhtron = new Circle1(4);
console.log("Chu vi hình chữ nhật:", hinhvuong.calculatePerimeter());
console.log("Chu vi hình tròn:", hinhtron.calculatePerimeter());
