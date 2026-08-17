const nums=[1,2,3,4];
let doubled=[];

for(let i=0;i<nums.length;i++){
    doubled.push(nums[i]*2);
}

// we can do the same task using for loop and map method 

const doubled2=doubled.map(function(elem){
    // console.log(elem*2);
    return elem*2;
})
console.log(doubled2);
let triple=nums.map(n=>n*3);

console.log(doubled);
console.log(triple);

let square=nums.map(n=>n**2);
console.log(square);


// it is used to modify an array & get new array
 