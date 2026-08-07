function firstFunction(num1,num2){
    const divide=num1/num2;
    console.log("Divide Result:",divide);

}

firstFunction(500,8);


function doMath(a,b,c,d){
    const firstSum=a+b;
    const secondSum=c+d;
    const multiplied=firstSum*secondSum;
    const divided=multiplied/4;
    return divided;
}

const result=doMath(1,2,3,4);
console.log(result);