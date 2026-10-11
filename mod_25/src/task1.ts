const getBatteryStatus=(parcentage:number):string=>{
    if(parcentage>=0 && parcentage<=20){
        return "Low";
    }
    else if(parcentage>=21 && parcentage<=50){
        return "Medium";
    }
    else if(parcentage>=51 && parcentage<=90){
        return "High";
    }
    else{
        return "Full";
    }
}