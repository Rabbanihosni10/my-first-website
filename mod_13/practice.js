// 2A
function checkTemperature(temp){

    if(temp>=30){
        return "Hot";
    }
    else if(temp<=15){
        return "Cold!";
    }
    else{
        return "Normal!";
    }
}

console.log(checkTemperature(35)); // Expected: "Hot"
console.log(checkTemperature(10)); // Expected: "Cold"
console.log(checkTemperature(20)); // Expected: "Normal"

// 2B 

function reverseNumber(num){
    let str=num.toString();
    console.log(str);
    let str1="";
    for(let i=(str.length)-1;i>=0;i--){
        str1=str1+str[i];
    }
    return str1;
}

console.log(reverseNumber(1234)); // Expected: 4321
console.log(reverseNumber(7));    // Expected: 7
