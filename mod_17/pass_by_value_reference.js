// pass by value 
//Reassign

let name="Rabbani";
let age=26;
function myFunc(name,myAge){
    name="Habib Uthsho";
    myAge=45;
    console.log(name);
    console.log(myAge);
}

myFunc(name,age);
console.log(name);
console.log(age);


//pass by reference
//Mutable

let student={
    name:"Uthsho",
    roll:29
}
function myFunc2(data){
    console.log(data);
    data.name="Habib Uthsho";
    data.roll=46;
    console.log(data);
}
myFunc2(student);
console.log(student);

