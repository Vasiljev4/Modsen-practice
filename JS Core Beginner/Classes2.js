class Rectangle {
    constructor(width, height) {
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

let rectangle = new Rectangle(5, 10);
let area = rectangle.calculateArea();
let perimeter = rectangle.calculatePerimeter();

console.log(`Площадь прямоугольника: ${area}`);
console.log(`Периметр прямоугольника: ${perimeter}`);
