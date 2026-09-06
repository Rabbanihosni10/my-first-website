// we will build a order processing system to understand dry and how important function is

function isValidPrice(price){
    return typeof price === "number" && price > 0;
}

function isValidEmail(email){
    return typeof email === "string" && email.includes("@") && email.includes(".");
}

function calculateDiscount(price,discount){
    if(!isValidPrice(price)){
        return 0;
    }
    let discountAmount = price * (discount/100);
    return price-discountAmount;
}

function calculateFinalBill(price,vatRate,discount){
    if(!isValidPrice(price)){
        return 0;
    }
    let discountedPrice = calculateDiscount(price,discount);
    let vatAmount = discountedPrice * (vatRate/100);
    return discountedPrice + vatAmount;
}

function formatBDT(amount){
    return `${amount.toFixed(2)} BDT`;
}

function capitalized(str){
    if(!str) return "";
    return str.charAt(0).toUppercase();+str.sclice(1);
}

function processOrder(user,itemPrice,discountCode){
    console.log(`----Processing Order for ${capitalized(user.name)}----`);
    if(!isValidEmail(user.email)){
        console.log("Error: Invalid user email:");
        return ;
    }
    let currentPRice=intemPrce;
    if(discountCode=="NLB"){
        currentPrice=calculateDiscount(itemPrice,10);
        console.log("20% discount applied")
    }
    let totalBill=calculateFinalBill(currentPrice,15,0);
}