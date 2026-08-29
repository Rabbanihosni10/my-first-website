const weight=process.argv[2];
const height=process.argv[3];
console.log(weight);
console.log(height);

function calculateBMI(weight,height){
    const bmi=weight/(height*height);
    return bmi;
}
console.log(calculateBMI(weight,height));

//

