//Task1
function describeDeclaration(bt){
    if(bt==="var"){
        return "Can redeclare, can reassign";
    }
    else if(bt==="let"){
        return "Cannot redeclare, can reassign";
    }
    else if(bt==="const"){
        return "Cannot redeclare, cannot reassign";
    }
    else{
        return "Invalid";
    }
}

console.log(describeDeclaration("let"));
console.log(describeDeclaration("const"));
console.log(describeDeclaration("var"));
console.log(describeDeclaration("int"));


//Task2
function bookTicket(movie,seats=1,pricePerSeat=300){
    if(typeof movie==="string" && seats >=0 && pricePerSeat>=0){
        const totalPrice=pricePerSeat*seats;
        return `${movie}:${seats} seat(s), Total ৳${totalPrice}`;
    }
    else{
        return "Invalid";
    }
}

console.log(bookTicket("Dune"));
console.log(bookTicket("Dune",3));
console.log(bookTicket("Dune",2,450));
console.log(bookTicket(123,2));


//Task3
function generateReceipt(){

}
console.log(generateReceipt("Rakib", ["Pen","Book"], 150));
console.log(generateReceipt("Sadia", ["Milk"], 60));
console.log(generateReceipt("Tanvir", [], 0));

//Task4

// const calculateBMI=(weight,height)=>{

// }