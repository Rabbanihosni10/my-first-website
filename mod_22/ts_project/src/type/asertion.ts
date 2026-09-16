let value: unknown;

// value.toUpperCase(); // Error: Object is of type 'unknown'.
// value.toFixed(2);

// let myValue=value as string;
let myValue=value as string;
myValue.toUpperCase();
const uppi=myValue.toUpperCase();
const yourValue=value as number;
yourValue.toFixed(2);


let data: unknown;
interface user{
    nanme:string;
    age:number;
}

const userData=data as user;
console.log(userData.name);