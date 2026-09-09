type UserRole="Admin" | "User" | "Moderator" | "Guest";


interface User{
    name: string;
    role:UserRole;
    email:string;
}

interface Admin extends User{
    permissions:string[];
}

interface Moderator extends User{
    moderatedSections:string[];
}

const bigBoss:Admin ={
    permissions:["read","write","delete"],
    role:"Admin",
    name:"Big Boss",
    email:"big.boss@example.com"
}
type book={
    title:string;
    author:string;
    publishedYear: number;
}

interface Gift{
    name:string;
}
interface Gift{
    price:number;
}

const hBdayGift:Gift={
    name:"Watch",
    price:200
}

// const 