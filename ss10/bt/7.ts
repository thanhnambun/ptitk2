class Circle {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }

    calculateCircumference(): number {
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
