// function useState(initialValue){
//     let value=initialValue;
//     function setValue(newValue){
//         value=newValue;
//     }
//     // return value;
//     return [value, setValue];
// }

// const [counter, setCounter]=useState(0);

// console.log(counter);
// console.log(setCounter);



const useState=<T>(initialValue:T):[T,(newValue:T)=>void]=>{
    let value=initialValue;
    function setValue(newValue:T){
        value=newValue;
    }
    return [value,setValue];
}
useState<string>("O");
useState<number>(0);
useState<boolean>(true);

interface User{
    email:string;
    isLoggedIn: boolean;
}

useState<User>({email:'',isLoggedIn:false});
useState<User | null>(null);