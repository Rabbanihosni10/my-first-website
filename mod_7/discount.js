const totalAmmount=5000;

if(totalAmmount>5000){
    const discount =30;
    const amount= totalAmmount * (discount/100);
    const payment= totalAmmount-amount;
    console.log(payment);
}
else if (totalAmmount >1000){
    const discount=10;
    const discountAmmount=totalAmmount*(discount/100)
    const payment= totalAmmount-discountAmmount;
    console.log(payment);
}