type TrafficLight = "red" | "yellow" | "green";
const getTrafficAction=(light:TrafficLight):string=>{
    return light==="red"?"Stop":light==="yellow"?"Slow Down":"Go";
}