/**
 * Ternary Operator
 * it means three
 * 
 */

const age= 28;
if (age>=18){
    console.log("Please Vote");
}
else{
    console.log("grow up kidd");
}

// age >18 ? console.log("Please Vote") : console.log("Grow up kid");


let price=500;
const isLeader=false;
// if(isLeader){
//     price=0;
// }
// else{
//     price=price+100;
// }

// console.log("Price is:", price);
price= isLeader?0: price+100;
console.log(price);

let pri= isLeader ? "true":"False";
console.log(pri);