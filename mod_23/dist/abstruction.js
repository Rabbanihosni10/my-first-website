"use strict";
// Math.floor(1)
// Math.ceil(2)
// Math.random()
Object.defineProperty(exports, "__esModule", { value: true });
// const d=new Date()
// console.log(d);
class Shape {
    describe() {
        console.log("This is a shape");
    }
}
// an abstract class instance cant be created 
// its methods(abstract) must be called in the child class
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return 3.1416 * this.radius * this.radius;
    }
}
const circle = new Circle(5);
console.log(circle.area());
class Rectangle extends Shape {
    height;
    width;
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width;
    }
}
const rectangular = new Rectangle(5, 6);
console.log(rectangular.area());
//# sourceMappingURL=abstruction.js.map