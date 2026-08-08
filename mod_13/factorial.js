console.log("==========");
console.log("Without using factorial");
const n=5;

let l=1;
let sum=1;
while(l<=5){
    sum*=l;
    l++;
}
console.log(sum);
console.log("==========");

console.log("Using Factorial");
function factorial(a,sum=1){
    for(let i=1;i<=a;i++){
        sum*=i;
    }
    return sum;
}

console.log(factorial(5));
console.log("==========");