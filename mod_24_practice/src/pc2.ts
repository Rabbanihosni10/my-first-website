const getSignalStatus=(strength:number):string=>{
    if(strength>=0 && strength<=20){
        return "Weak";
    }                 
    else if(strength>=-21 && strength<=50){
        return "Fair";
    }     
    else if(strength>=51 && strength<=80){
        return "Good";
    }     
    else if(strength>=81 && strength<=100){
        return "Excellent";
    }
    else{
        return "Invalid Signal Strength";
    }
}

console.log(getSignalStatus(10));
// "Weak"
 
console.log(getSignalStatus(35));
// "Fair"
 
console.log(getSignalStatus(65));
// "Good"
 
console.log(getSignalStatus(95));
// "Excellent"
 
// boundary values to double-check:
console.log(getSignalStatus(20));
console.log(getSignalStatus(21));
console.log(getSignalStatus(80));
console.log(getSignalStatus(81));
