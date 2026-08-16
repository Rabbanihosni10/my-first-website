// important 
// interview 
//Clouse is when a function is able to remember and 
// access its lexical scope when that function is executing 
// outside its lexical scope


function createCounter(){
    let counter = 0;

    return function(){
        counter++;

        return counter;
    }
}
let counter=createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

function cashRegister(){
    let ammount =0;

    return function(payAbleAmmount){
        ammount+=payAbleAmmount;
        return ammount;
    }
}

let coffeeShopCashCounter=cashRegister();
let resturantCashCounter=cashRegister();
let juiceBarCashCounter=cashRegister();
console.log(coffeeShopCashCounter(200));
console.log(coffeeShopCashCounter(500));
console.log(resturantCashCounter(50));
console.log(coffeeShopCashCounter(200));

console.log(juiceBarCashCounter(43));
console.log(coffeeShopCashCounter(100));
console.log(resturantCashCounter(50));