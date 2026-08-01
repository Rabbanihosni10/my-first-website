//practice-1
let arr= ["item-1","item-2","item-3"];
let cc=0;
while(cc<arr.length){
    console.log(arr[cc]);
    cc++;
}
//practice-2
console.log(arr.length);   // get the length of the array
//practice-3

console.log(arr[0],arr[2]);
//practice-4
arr[1]="item-two";
console.log(arr[1]);

//practice-5
arr.pop();  // delete the last item
console.log(arr);
//practice-6
arr.push("item-0");  // add a new item at the end 
console.log(arr);

arr.unshift("item-00");   // add a new item at the beginning
console.log(arr); 
console.log("===================---===================");
let newArr=["item-000", ...arr]; // add a new item at the beginning using spreading operatior
// also create a new arrray with the modified element without change the main array
console.log(arr);
console.log(newArr);


arr.splice(0,0,"item-0000");  // add a new item at the beginning using splice method
console.log(arr);

let varArr=arr.shift();   // remove the first element from the array
console.log(varArr);
console.log(arr);


console.log("===================---===================");
//practice 9

const fr="tobarok";
for(let i=0;i<arr.length;i++){
    if(fr===arr[i]){
        console.log("Found the element:",arr[i]);
        break;
    }
    else{
        console.log(1===0);
    }
}
// practice 10 
const fr1="item-1";
for(let i=0;i<arr.length;i++){
    if(fr1===arr[i]){
        console.log(i);
        break;
    }
}




