// there are two types of data 
// 1st type is primitive --
//string, number, boolean, undefined, null, symbol, bigint
// they are immutable 

//2nd type is non-primitive
//object
//array
// function 

//premitive
let name="Rabbani";
let name2=name;
let age=26;
let isMarried=false;
let universityResult=undefined;
let salary=null;

console.log(name);
console.log(name2);
name=23;
console.log(name);
console.log(name2);


//non primitive
// change also change because memory address is also copied
let student={
    name: "Utsho",
    type: 'student',
    id: 22201501
}
let student2=student;
console.log(student);
console.log(student2);
student.id=26;
console.log(student);
console.log(student2);
