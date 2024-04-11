"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const rectangle = new Rectangle(5, 7);
console.log("Width:", rectangle.getWidth());
console.log("Height:", rectangle.getHeight());
console.log("Perimeter:", rectangle.calculatePerimeter());
console.log("Area:", rectangle.calculateArea());
rectangle.setWidth(8);
rectangle.setHeight(10);
console.log("\nUpdated Width:", rectangle.getWidth());
console.log("Updated Height:", rectangle.getHeight());
console.log("Updated Perimeter:", rectangle.calculatePerimeter());
console.log("Updated Area:", rectangle.calculateArea());
