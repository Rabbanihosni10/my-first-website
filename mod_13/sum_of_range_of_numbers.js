// Problem 2: sum of a range of numbers (1 to N)


let sum=0;

let number=7;
for(let i=1;i<=number;i++){
    sum+=i;
    console.log("i==>",i);
}
console.log(sum);

function sum_of_range_of_numbers(number){
    let sum=0;
    for(let i =1;i<=number;i++){
        sum+=i;
        console.log("i==>",i);
    }
    return sum;
}
const result=sum_of_range_of_numbers(number);
console.log(result);

console.log(sum_of_range_of_numbers(number));
console.log(sum_of_range_of_numbers(10));
console.log(sum_of_range_of_numbers(500));