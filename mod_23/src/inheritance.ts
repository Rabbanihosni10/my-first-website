// parent class or super class 
class User{
    private _name:string
    private _age:number
    protected _email:string
    constructor(name:string, age:number, email:string){
        this._name=name;
        this._age=age;
        this._email=email;
    }
    get age():number{
        return this._age;
    }
    set age(value:number){
        if(value<0 || value>100){
            throw new Error("Age is not valid");
        }
        this._age=value;
    }
}  

//child class 
class Student extends User{ 
    private _fee: number 

    constructor(name:string,age:number,email:string,fee:number){
        super(name,age,email);
        this._fee=fee;
    }
}

const student=new Student("Ismail",24,"email@ismail.com",8500);
console.log(student);
console.log(student.age);
// class Student{
//     private _name: string
//     private _age: number
//     private _email: string 
//     private _fee: number 

//     constructor(name: string, age:number, email:string,fee:number){
//         this._name=name;
//         this._age=age;
//         this._email=email;
//         this._fee=fee;
//     }
// }






// const user=new User("Abul",23,"abul@kabul.com");
// console.log(user);

// getter (get) - can never pass any argument . Only some compitition and return value
// setter(set)- have some argument in it but never can return just throw only
//