//Without function
const l=15;
for(let i=1;i<=l; i++ ){
    if(i%3==0){
        console.log(i, "Fizz");
    }
    else if(i%5==0){
        console.log(i, "Buzz");
    }
    else if(i%3==0 && i%5==0){
        console.log(i,"FizzBuzz");
    }
    else{
        console.log(i);
    }
}

// with function 
function fizzBuzz(number){
    for(let i=1;i<=number; i++ ){
        if(i%3==0){
            console.log(i, "Fizz");
        }
        else if(i%5==0){
            console.log(i, "Buzz");
        }
        else if(i%3==0 && i%5==0){
            console.log(i,"FizzBuzz");
        }
        else{
            console.log(i);
        }
    }   
}

fizzBuzz(l);
