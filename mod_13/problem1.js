// add two number , at first using without function , then using function


//without function
let a=12;
let b=13;
const sum=a+b;
console.log("Summetion without function:",sum);

//with function

function add(a,b){
    const sum=a+b;
    return sum;
}
const result=add(4,5);
console.log("Summetion with function:",result);