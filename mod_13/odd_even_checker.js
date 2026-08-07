let number=18;

//without function
if(number%2===0){
    console.log("It's a even number!");
}
else{
    console.log("It's a odd number!");
}

//with function

function checkEvenOrOdd(number){
    if(number%2===0){
        return "Its an even number";
    }
    else{
        return "Its an odd number";
    }
}
const result= checkEvenOrOdd(number);
console.log(result);

console.log(checkEvenOrOdd(35));
console.log(checkEvenOrOdd(25));
console.log(checkEvenOrOdd(50));
