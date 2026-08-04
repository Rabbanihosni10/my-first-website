let numbers=[12,24,45,65,13,50];
const length=numbers.length;
console.log(length);

for(let i=0;i<length;i++){
    console.log("Numbers:",numbers[i]);
}

for(const num of numbers){
    console.log("Current Item is:",num);
}

const reversed=numbers.reverse();
console.log("Reversed Array:",reversed);
const reversed1=numbers.reverse();
console.log("Original Array:",numbers);
let numbers1=[];

for(const num1 of numbers){
    numbers1.unshift(num1);
    console.log(numbers1);
}