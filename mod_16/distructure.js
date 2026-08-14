const numbers=[10,20,30,40,50];

console.log(numbers);
// const ten=numbers[0];
// const twenty=numbers[1];
// const thirty=numbers[2];
// console.log(ten);
// console.log(twenty);
// console.log(thirty);
const [ten,twenty,,,fifty]=numbers;

console.log(ten,twenty,fifty);

const student={
    name: "Uthsho",
    roll: 29,
    age: 26,
    marks: {
        physics:95,
        phy:12,
        math:44
    }
}
const rol=student.roll;
console.log(student.name,rol);
// const {age,name}=student;
// console.log(age,name);
// const {age,name:fullName}=student;
const {age,name:fullName,marks: {physics,math}}=student;
console.log(age,fullName);
console.log(student);