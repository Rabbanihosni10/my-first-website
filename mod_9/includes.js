const numbers=[12,98,77,6,23];


const hasItem=numbers.includes(6);  // this will check if the number is present in the array or not
console.log(hasItem);

if(numbers.includes(6)){
    console.log("Yes, the number is present in the array");
}

const allNumbers=numbers.concat([1,2,3,4,5,6,7,8,9]);
console.log(allNumbers);

const newNumbers=numbers.join(" ");
console.log(newNumbers);

const newNumbers1=numbers.join("-");
console.log(newNumbers1);   

const position =numbers.indexOf(6);  // this will return the index of the number if it is present in the array otherwise it will return -1
console.log(position);