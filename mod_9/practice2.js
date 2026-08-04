// Advance practices 

const numbers=[12,98,77,6,23,6,34,14,12];
console.log(numbers);
let num1=[];
let c=0;
while (numbers.length>c){
    if(!num1.includes(numbers[c])){
        num1.push(numbers[c]);
    }
    c++;
}
console.log(num1);
console.log(num1.sort());

const numbers1=[...num1,"tobarok","Mitai","Inqelub"];
let num2=[] //for string 
let num3=[] // for numbers
let cc=0
while (numbers1.length>cc){
    if (typeof numbers1[cc] === "string"){
        num2.push(numbers1[cc]);
    } else {
        num3.push(numbers1[cc]);
    }
    cc++;
}
console.log(num2);
console.log(num3);