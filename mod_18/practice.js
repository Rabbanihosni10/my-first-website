//Task1

const calculateBill=(amount, taxRate = 0.05)=> amount+(amount * taxRate);

console.log(calculateBill(1000));
console.log(calculateBill(1000, 0.10));


//Task2
const buildProfileCard=(user)=>`${user.name}\n${user.title} at ${user.company}`;
console.log(buildProfileCard({ name: "Arif", title: "Developer", company: "Programming Hero" }));

//Task3
const getLowestPrice=(prices)=>{
    const lowest=Math.min(...prices);
    return lowest;
}
console.log(getLowestPrice([340,120,560,90]));

//Task4
const swapValues=(a,b)=>{
    return [b,a];
}
console.log(swapValues(5,10));

//Task5
const getEmployeeDept=(employee)=>{
    return employee?.job;
}
console.log(getEmployeeDept({ name: "Nadia", job: { title: "PM", department: "Product" } }
));

//Task6
const promoteEmployee=(employee,newTitle)=>{
    let new_employee={...employee};
    new_employee.title=newTitle;
    // console.log(employee);
    return new_employee;
}
console.log(promoteEmployee({ name: "Rafi", title: "Junior Dev" }, "Senior Dev")
);

//Task7
const sumAllPrices=(prices)=>{
    let sum=0;
    for(let i of prices){
        sum+=i;
    }
    return sum;
}
console.log(sumAllPrices([100,250,75]));

//Task8

const getManagerName=(employee)=>{
    if(employee.manager===undefined){
        return undefined;
    }
    else{
        return employee.name;
    }
}