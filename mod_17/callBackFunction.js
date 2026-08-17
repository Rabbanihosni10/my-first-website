// function registerStudent(){

// }

// console.log(registerStudent());

// a call back is a function passed as an argument to another fucntion. 

function registerStudent(cb){
    console.log("User is registering. Need more data");
    console.log(cb);
    cb();
    
}

// const userBasicInfo=()=>{
//     const student={
//         name: "uthsho",
//         age: 26,
//         roll:29
//     };
//     return student;
// }
// console.log(registerStudent(userBasicInfo));
console.log(registerStudent);

const pastAcademicInfo=()=>{
    let academicInfo={
        pec: 5.00,
        jsc: 5.00,
        ssc: 5.00,
        hsc: 5.00
    }
    console.log(academicInfo)
}

console.log(registerStudent(pastAcademicInfo));


function displayResult(result){
    console.log(result);
}
function calculator(a,b,cb){
    let sum=a+b;
    // return sum;
    cb(sum);
}

calculator(50,55,displayResult);