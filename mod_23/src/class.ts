// /**
//  * name
//  * email
//  * age
//  * marks
// */

// class Student {
//     name: string
//     email: string
//     age: number
//     marks: number

//     constructor(name:string,email: string, age:number, marks:number){
//         this.name=name;
//         this.email=email;
//         this.age=age;
//         this.marks=marks;
//     }
// }

// //construction --> special method
// // Class and objects all kind of function is method 

// const rafi=new Student("Rafiq","rafiq@gmail.com",16,100);

// console.log(rafi);

// const sadia=new Student("Sadia","sadiaQueen@gmail.com",12,45);
// console.log(sadia);





/**
 * name
 * email
 * age
 * marks 
 */

//instantiate
//instace


class Student{
    name:string 
    email:string
    age:number
    marks:number
    constructor(name: string,email: string, age:number, marks:number){
        this.name=name,
        this.email=email,
        this.age=age,
        this.marks=marks
    }
}

//constructor --> a special type of method




const rafi=new Student("Rafi","rafi@gmail.com",15,75);
const sadia=new Student("Sadia","sadia@gmail.com",25,92);
console.log(rafi);
console.log(sadia);

