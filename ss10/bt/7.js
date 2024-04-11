"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }
}
const circle = new Circle(5);
console.log("Radius:", circle.getRadius());
console.log("Circumference:", circle.calculateCircumference().toFixed(2));
console.log("Area:", circle.calculateArea().toFixed(2));
circle.setRadius(7);
console.log("\nUpdated Radius:", circle.getRadius());
console.log("Updated Circumference:", circle.calculateCircumference().toFixed(2));
console.log("Updated Area:", circle.calculateArea().toFixed(2));
