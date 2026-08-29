type Gender= "Male" | "Female" | "Private";
type Student={
    name:string;
    id:number;
    major:string;
    gpa?:number;
    gender?:Gender;
}
const robin: Student={
    name:"Robin",
    id: 22299243,
    major: "CS",
    gpa:3.00
};

const mobin:Student={
    name:"Mobin",
    id: 22201243,
    major: "CS",
    gpa:3.24
}
const tobin:Student ={
    name:"Tobin",
    id: 22201543,
    major: "CSE",
    gpa:3.20
}

const jobin:Student={
    name:"Jobin",
    id:2323121,
    major:"Data Science",
}