class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getWidth(): number {
        return this.width;
    }

    setWidth(width: number): void {
        this.width = width;
    }

    getHeight(): number {
        return this.height;
    }

    setHeight(height: number): void {
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
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
