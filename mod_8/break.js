for(let i=0;i<=100;i++){
    if (i>5){
        break;
    }
    console.log(i);
}

let count=0;

while(count<10){
    if(count>3){
        break;
    }
    console.log("without break:",count);
    count++;
}

// if break happend
// end the loop instantly there