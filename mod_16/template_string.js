// let name="Utsho";
// let price=500;
// let location=`Badda, Dhaka`;

// let message= "Hello "+name+".Your bill is "+price;
// console.log(message);
// console.log(location);


// let message1=`Hello ${name}. Your bill is ${price}`;
// console.log(message1);


let ammount=1500;

function admissionConfirmation(name,ammount){
    let message=` Hello ${name || "Student"}, Your admission is being successful. Also your payment is done. Payment ammount ${ammount}`;
    return message;
}
console.log(admissionConfirmation("Shahjalal",ammount));