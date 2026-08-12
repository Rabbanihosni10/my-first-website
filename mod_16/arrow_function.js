function sayGreet(name){
    return `Hello ${name}. Good Morning`;
}
console.log(sayGreet("Tobarok"));


// const sayGreet1=(name)=>{
//     return `Hello ${name}, Good Evening.`;
// }

// When there is single statement the below method can be implemented.
const sayGreet1=(name)=> `Hello ${name}, Good Evening.`; // Implecit return
//if multiline is implemented then perenthesis and return statement should be implemented like normal arrow function

console.log(sayGreet1("Mobarok"));
