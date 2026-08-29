const getLargerName=(person1:string,person2:string):string=>{
    if(person1.length>person2.length){
        return person1;
    }
    return person2;
}