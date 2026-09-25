"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    _name;
    constructor(name) {
        this._name = name;
    }
    makeSound() {
        console.log("Animal Can make sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Gheu Gheu");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meowwwwwwwww");
    }
}
// const cat=new Cat("Billu");
// console.log(cat);
// cat.makeSound();
// const dog=new Dog("Dreek");
// console.log(dog);
// dog.makeSound();
// here we use from same super class use same method but the behaivior change in different classes
//Example 2
class Shape {
    area() {
        return 0;
    }
}
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
//# sourceMappingURL=polymorphism.js.map