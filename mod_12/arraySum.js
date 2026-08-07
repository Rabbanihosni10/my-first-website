const numbers=[12,4,6,18,56];

let sum=0;
for(const num of numbers){
    sum+=num;
    console.log(num,sum);
}

const odds=[23,15,11,71,29];

let symOdds=0;
for (const num of odds){
    symOdds+=num;
}

function sumOfArray(array){
    console.log("Inside the function:",array);
    let sum=0;
    for(const num of array){
        sum+=num;
    }
    return sum;
}


const result=sumOfArray(numbers);
console.log(result);