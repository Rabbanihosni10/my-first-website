interface Track{
    title:string;
    minutes:number;
}
const calculateTotalListeningTime=(tracks:Track[]):number=>{
    return tracks.reduce((sum,item)=>sum+item.minutes,0);
}

const tracks = [
    { title: "Blinding Lights", minutes: 3 },
    { title: "Levitating", minutes: 4 },
    { title: "Peaches", minutes: 3 }
];
 
console.log(calculateTotalListeningTime(tracks));
// 10
 
// another example:
const tracks2 = [
    { title: "Flowers", minutes: 3 },
    { title: "Anti-Hero", minutes: 4 }
];
 
console.log(calculateTotalListeningTime(tracks2));
// 7
