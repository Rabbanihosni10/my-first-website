// task1.1 
let str = "hello";
let arr = ["h", "e", "l", "l", "o"];

console.log(str.length);
console.log(str[0],arr[0]);
// console.log(str.push("!")); it cant be done because it is a string not a array function.


// task1.2

let conico='JavaScript';
console.log(conico.split(""));

const arr1=["c","a","t"];
console.log(arr1);
let arr2="";
for(const i of arr1){
    arr2+=i;
}
console.log(arr2);

// Task2.1
let name="Javascript";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
let name1="   hi there   ";
console.log(name1.trim());

//Task3.1
let sentence = "Learning JavaScript is fun!";
console.log(sentence.slice(0,8));
console.log(sentence.slice(-4));

//Task3.2
const h1="Hello";
const h2="World";

let h3=h1.concat(" ",h2);
console.log(h3);
h3=h1+" "+h2;
console.log(h3);
console.log(h1,h2);
console.log(`${h1} ${h2}`);


//Task5.1
const student={
    name: "Khan",
    age: 24,
    grade: "Class 10",
    isEnrolled: true
}
console.log(student);

console.log(student.name);
console.log(student.age);
console.log(student.grade);
console.log(student.isEnrolled);

/** Task5.2
 * What is an object?
 * in my views its basically a js property or tool thats having key and value pair, which can hold different kinds of datatype in a single property. It is also know as dictionary in python
*/

//Task6.1

let car = { brand: "Toyota", model: "Corolla", year: 2022 };

console.log(car);
let brad=car.brand;
console.log(brad);
console.log(car['model']);
car['color']="blue";
console.log(car);
car['year']=2023;
console.log(car);

//Task7.1
let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };
const key=Object.keys(book);
console.log(key);
const value=Object.values(book);
console.log(key.concat(value));
delete book['pages'];
console.log(book);

//Task7.2
let user = {
  username: "coder123",
  address: {
    city: "Austin",
    zip: "78701"
  }
}
console.log(user.address.city);
user.address['country']="Netharland";
console.log(user.address.country);

//Task8.1
let scores={math:90,science:85,art:95};
for (const i in scores){
    const key=i;
    const value=scores[key];
    console.log(`${key}: ${value}`);
}
let sum=0;
let ct=0;
for(const i in scores){
    sum+=scores[i];
    ct+=1;
}
const avg=sum/ct;
console.log(sum);
console.log(avg);

//Task9.1

let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234"
};
console.log(contact.email.toLowerCase());
console.log("======================");
for(const i in contact){
    const key=i;
    const value=contact[key];
    console.log(`${key}: ${value}`);
}
console.log("======================");
contact['favoriteWords']=['tobarok','mamluk','sultaniate'];
console.log(contact);
const isPresnt=contact.email.includes("@email.com");
console.log(isPresnt);
const isPresent2=contact.email.toLowerCase().includes("@email.com");
console.log(isPresent2);

//let name='Javascript'
//Task4.1
//approch 1
let name2=name.split("");
// console.log(name2);
name2.reverse();
// console.log(name2);
name2=name2.join('');
console.log(name2);

//approch 2
let name3="";
// for of also used in string along withb array 
for(const i of name){
    name3=i+name3;
}
console.log(name3);

//approch 3
let name4="";
len=name.length;
// let name4=name.slice(-4);
for(let i=len-1; i>=0;i--){
    name4+=name[i];
    if(i==0){
        break;
    }
}
console.log(name4);

//approch 4
const name5=[...name].reverse().join("");
console.log(name5);



