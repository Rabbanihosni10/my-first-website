class Animal{
    private _name:string;


    constructor(name:string){
        this._name=name;
    }

    makeSound():void{
        console.log("Animal Can make sound");
    }
}

class Dog extends Animal{
    makeSound():void{
        console.log("Gheu Gheu");
    }
}
class Cat extends Animal{
    makeSound():void{
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

class Shape{
    area():number{
        return 0;
    }
}

class Circle extends Shape{
    radius:number

    constructor(radius:number){
        super();
        this.radius=radius;
    }

    area():number{
        return 3.1416*this.radius*this.radius;
    }
}

const circle=new Circle(5);
console.log(circle.area());

class Rectangle extends Shape{
    height: number;
    width: number;


    constructor(height:number,width:number){
        super();
        this.height=height;
        this.width=width;
    }

    area():number{
        return this.height*this.width;
    }
}

const rectangular=new Rectangle(5,6);
console.log(rectangular.area());