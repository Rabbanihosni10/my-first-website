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
function generateReceipt(customerName,items,total){
    if(items.length!==0){
        return `Receipt for ${customerName}\nItems: ${[...items]}\nTotal: ৳${total}`;
    }
    else{
        return "Invalid";
    }
}
console.log(generateReceipt("Rakib", ["Pen","Book"], 150));
console.log(generateReceipt("Sadia", ["Milk"], 60));
console.log(generateReceipt("Tanvir", [], 0));

//Task4
//weight in kg and height in m
const calculateBMI=(weight,height)=>{
    if(weight>0 && height>0){
        const BMI=weight/(height*weight);
        return BMI;
    }
    else{
        return "Invalid";
    }
}

console.log(calculateBMI(50,1.6));
console.log(calculateBMI(60,-1.7));
console.log(calculateBMI(70,1.75));

// task5

const mergeInventory=(arr1,arr2)=>{
    if(Array.isArray(arr1) && Array.isArray(arr2)){
        const arr=[...arr1,...arr2];
        return arr;
    }
    else{
        return "Invalid";
    }
}
const highestScore=(scores)=>{
    if(Array.isArray(scores)){
        const max_score=Math.max(...scores);
        return max_score;
    }
    else{
        return "Invalid";
    }
}
console.log(mergeInventory([1,2],[3,4]));
console.log(highestScore([3,7,2,9,4]));
console.log(highestScore("3,7,2"));

//Task6

const extractUserInfo=()=>{
    
}