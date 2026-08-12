let numbers=[10,20,30,40,50];
console.log(...numbers);

let students={
    name: "Utsho",
    age:26
}

// console.log(...students);


// Math.max()


// let maxNumber=Math.max(numbers);  //NaN
let maxNumber=Math.max(...numbers);
console.log(maxNumber);


let numbers2=numbers;

console.log(numbers2);


numbers.push(2500);
console.log(numbers);
console.log(numbers2);


let students2=students;

students.something="test";
console.log(students2);

let students3={...students,gpa:"5.0"};
console.log(students3);