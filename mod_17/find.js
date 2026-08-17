const prices=[10,20,30,40,50,60,140,115,51];


let expensiveProduct=prices.find((elem)=> elem>=50);
console.log(expensiveProduct);

//Find: find out the first element based on condition



let phone=[
    {
        model: "Iphone10",
        price: 25000
    },
    {
        model: "Iphone11",
        price: 45000
    },
    {
        model: "Iphone12",
        price: 55000
    },
    {
        model: "Iphone13",
        price: 60000
    },
    {
        model: "Iphone14",
        price: 75000
    },
    {
        model: "Iphone15",
        price: 95000
    },
    {
        model: "Iphone16",
        price: 105000
    },
]

// expensive phones: 50000>=
// cheapest phone: 40000 <=

let expensivePhone=phone.filter(phone1=> {
    console.log(phone1);
    return phone1.price>=50000;
});
console.log(expensivePhone);

let cheapPhone=phone.filter(phone2=>{
    console.log(phone2);
    return phone2.price<=40000;
})
console.log(cheapPhone);