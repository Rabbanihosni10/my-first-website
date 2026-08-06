const numbers=[21,45,22,54,82];
for (const i of numbers){
    console.log(i);
}
// for ... of ---> array
// for ... in ---> object 

const student={
    name: 'akbar',
    id: 222,
    age:14,
    favSubject: ['physics','math','chem']
}

for(const key in student){
    console.log(key);
    // console.log(j);
    const value=student[key];
    console.log(value);
    console.log(key, value);
}

const keys=Object.keys(student);
console.log(keys);
const values=Object.values(student);
console.log(values);

for(const key of keys){
    console.log(key);
    const value=student[key];
    console.log(value);
}
for(const value of values){
    console.log(value);
}
// console.log(Object.props(student));