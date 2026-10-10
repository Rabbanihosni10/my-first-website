type Player={
    name: string;
    scores: number[];
}
interface PlayerStatus{
    name:String;
    average:number;
    rank:string;
}
const getPlayerStats=(player:Player):PlayerStatus=>{
    const totalScore=player.scores.reduce((sum,acc)=>sum+acc,0);
    const avg=totalScore/player.scores.length;
    if(avg>=80){
        return {
            name: player.name,
            average: avg,
            rank: "MVP"
        };
    }
    return {
        name: player.name,
        average: avg,
        rank: "Rookie"
    };
}

console.log(getPlayerStats({
    name: "Nova",
    scores: [90, 85, 95, 80]
}));
 
// Expected output:
// { name: "Nova", average: 87.5, rank: "MVP" }
 
// another example:
console.log(getPlayerStats({
    name: "Zex",
    scores: [60, 55, 70, 50]
}));
 
// Expected output:
// { name: "Zex", average: 58.75, rank: "Rookie" }
