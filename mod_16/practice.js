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

const extractUserInfo=(userObj)=>{
    const {user,hobbies}=userObj;
    const hobby=Object.values(hobbies);
    const {name,age}=user;
    if(typeof name==="string"){

        if(hobby.length!==0){
            return `${name} (${age}) likes ${hobby[0]}`;
        }
        else{
            return `${name} (${age}) likesn nothing yet`;
        }
    }
    else{
        return "Invalid";
    }

}
console.log(extractUserInfo({user:{name:"Sadia",age:22}, hobbies:["reading","coding"]}));
console.log(extractUserInfo({user:{name:"Rafi",age:19}, hobbies:[]}));
console.log(extractUserInfo({user:{age:30}, hobbies:[]}));


//Task7

const manageInventoryObject=(obj,action)=>{
    if(action.startsWith("keys")){
        return Object.keys(obj);
    }
    else if(action.startsWith("values")){
        return Object.values(obj);
    }
    else if(action.startsWith("entries")){
        return Object.entries(obj);
    }
    else if(action.startsWith("delete:")){
        let arr=action.split(":")[1];
        delete obj[arr];
        return obj;
    }
    else if(action.startsWith("seal")){
        // console.log("s");
        Object.seal(obj);
        return obj;
    }
    else if(action.startsWith("freeze")){
        Object.freeze(obj);
        return obj;
        // console.log("adsf");
    }
    else{
        return "Invalid";
    }
    
}

console.log(manageInventoryObject({a:1,b:2,c:3}, "keys"));
console.log(manageInventoryObject({a:1,b:2,c:3}, "entries"));
console.log(manageInventoryObject({a:1,b:2,c:3}, "delete:c"));
console.log(manageInventoryObject({a:1}, "shrink"));


//Task8
const printObjectDetails=(obj, looptype)=>{
    // const keys=Object.keys(obj);
    // const values=Object.values(obj);
    // const [key,value]=entities;
    
    
    if(looptype==="forin"){
        let arr=[];
        for(let i in obj){
            const key=i;
            const value=obj[i];
            arr.push(`${key}:${value}`);
        }
        return arr;
    }
    else if(looptype==="forofentries"){
        let arr=[];
        const entities=Object.entries(obj);
        // return entities;
        for(let i of entities){
            const key=i[0];
            const value=i[1];
            arr.push(`${key}:${value}`);
        }
        return arr;
    }
    else if(looptype==="entriesDestructure"){
        // let arr=[];
        const entities=Object.entries(obj).map(([key,value])=>`${key}:${value}`);
        return entities;

    }
    else{
        return "Invalid"
    }
}

console.log(printObjectDetails({fruit:"Mango",price:50}, "forin"));
console.log(printObjectDetails({fruit:"Mango",price:50}, "entriesDestructure"));
console.log(printObjectDetails({}, "loopThrough"));


//Task9

// var calculateTotal = function(items) {
//   var total = 0;
//   for (var i = 0; i < items.length; i++) {
//     total = total + items[i].price;
//   }
//   return 'Total: ' + total + ' Taka';
// };

const refactorToES6=(arr)=>{
    let total=0;
    // let ct=arr.length;
    for(let k of arr){
        for(let i in k){
            total+=k[i];
        }
    }
    return total;
}

console.log(refactorToES6([{price:100},{price:250}]));
console.log(refactorToES6([{price:80}]));
