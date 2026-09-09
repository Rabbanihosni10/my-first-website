interface User {
    name: string;
    age: number;
    email: string;
    isAdmin: boolean;
    salary?: number;
    institution?: string;
}


// usually interface will be used from now onwards in everywhere

const mashfee: User={
    name:"Mashfee",
    age:22,
    email:"mashfee@example.com",
    isAdmin:true,
    salary: 50000,
    institution: "Queen's University"
}
const robin: User={
    name:"Robin",
    age:22,
    email:"robin@example.com",
    isAdmin:false
}

const team: User[]= [mashfee,robin,{
    name:"Shahrin",
    age:24,
    email:"shahrin@example.com",
    isAdmin:false,
    salary: 40000
}]
console.log(team);

function printUser(user: User): void{
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
    console.log(`Is Admin: ${user.isAdmin}`);
}
printUser(mashfee);
printUser({name:"elon",age:40,email:"elon@example.com",isAdmin:true});


function printTeam({teamName, members}: {teamName: string, members: User[]}): void{

}