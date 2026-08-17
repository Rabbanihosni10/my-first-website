// Filter: filter out element and create new array based on condition

const prices=[10,20,30,40,50,60];

// let expensiveProduct=prices.filter((elem)=>{
//     // console.log(elem);
//     // if(elem>50){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // } 
//     return elem>=50;
// })

let expensiveProduct=prices.filter((elem)=> elem>=50);

console.log(expensiveProduct);
