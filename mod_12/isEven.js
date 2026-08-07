function isEven(number){
    console.log(number%2);
    console.log(number, "divided by 2 so the reminder is",number%2);
    if(number%2===0){
        return true;
    }
    else{
        return false;
    }
}

const result=isEven(50);
console.log("Is the number Even?-->",result);
const result1=isEven(55);
console.log("Is the number Even?-->",result1);