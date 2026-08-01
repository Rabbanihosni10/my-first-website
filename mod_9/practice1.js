//Intermidiate JavaScript Practice

//Practice 1
let arr1=[1,2,3,4,5,6,7,8];
let arr2=[9,10,11,12,13,14,15,16];
console.log(arr1.concat(arr2)); // this added the elements of two array
console.log(arr1+arr2);
let arr3=[arr1+arr2];   // this convert the two array into one single string value
console.log(arr3);
let arr4=[...arr1,...arr2];  // this added the two array by using spread methode
console.log(arr4);

let arr5=arr1.slice(1,4);   // this will help to take a particular portion of an array without changing the main array
console.log(arr5);
console.log(arr1);

//Practice 2
let arr7=[arr1+""];
console.log(arr7);

let arr8=arr1.join(" ");   // combined all the elements of the array into a single string
console.log(arr8);

const arr9="Labbaiyek";
if(typeof arr9=== typeof arr1){
    console.log("Both are same");
}
else{
    console.log(typeof arr9);
    console.log(typeof arr1);
}



