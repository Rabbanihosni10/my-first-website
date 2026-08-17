//slice

const fruits=["apple","banana","Tobarok","mango","orange"];
const sliced=fruits.slice(1,3);
console.log(sliced);

//reduce

let nums=[10,20,30,40,50,60];

let sum=nums.reduce((accumulator,Element, idx,arr)=>{
    accumulator+=Element;
    console.log(accumulator,Element,idx,arr);
},0);