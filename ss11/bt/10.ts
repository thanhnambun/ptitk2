class Shape1 {
    calculateArea(): number {
        return 0;
    }

    calculatePerimeter(): number {
        return 0;
    }
}

class Rectangle1 extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

class Circle1 extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

const hinhvuong = new Rectangle1(5, 3);
const hinhtron = new Circle1(4);

console.log("Chu vi hình chữ nhật:", hinhvuong.calculatePerimeter());
console.log("Chu vi hình tròn:", hinhtron.calculatePerimeter());
