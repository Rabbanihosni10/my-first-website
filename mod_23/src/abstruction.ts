// Math.floor(1)
// Math.ceil(2)
// Math.random()

// const d=new Date()
// console.log(d);

abstract class Shape{
    abstract area():number

    describe(){
        console.log("This is a shape");
    }
}

// an abstract class instance cant be created 
// its methods(abstract) must be called in the child class


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
