/**
 * 1. Varible Basic Types
 * 2. array
 * 3. Function
 * 4. Object
 * 5. Some more basic types
 */

const destination:string="Saint Martin";
const helicopters:number= 33;
const countries:string[]=["France","Italy","Spain","Germany"];

function buyBook(title:string,price:number,discount?:number):string{
    if(discount===undefined){
        discount=0;
    }
    return `The Book ${title} costs ${price-discount}`;
}
const tobarok:{name:string,age:number}={
    name:"Honu",
    age:32
}

//union string | number | boolean |null


//src means sourse
//dist means 