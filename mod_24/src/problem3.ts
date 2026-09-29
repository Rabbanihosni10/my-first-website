// using type 

// type Player={
//     username:string,
//     level:number,
//     region: string
// }
// const formatUserProfile=(player:Player):string=>{
// }


//If we dont use the type 

// const formatUserProfile=(player:{
//     username:string,
//     level:number,
//     region: string
// })=>{
// }

//using interface
interface IPlayer {
    name: string
    age: number
    city: string
}

const formatUserProfile=(player:IPlayer):string=>{
    // return `player.`
    return `${player.name} is ${player.age} years old and lives in ${player.city}`;
}

console.log(formatUserProfile({
    name:"Fahim",
    age:22,
    city:"Dhaka"
}));