type Student={
    name:string;
    marks:number[];
}
interface Result{
    name:string;
    average:number;
    result:string;
}


const getStudentResult=(student:Student):Result=>{
    const marks:number[]=student.marks;
    const totalMarks:number= marks.reduce((sum,mark)=>sum+mark,0);
    const avg=totalMarks/marks.length;

    if(avg>=40){
        return {name:student.name, average:avg,result:"passed"};
        
    }
    else{
        return {name:student.name, average:avg,result:"failled"};
    }
} 
 



console.log(getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85]
}));
 
// // Expected output:
// // { name: "Rafi", average: 82.5, result: "Passed" }
 
// // another example:
console.log(getStudentResult({
    name: "Nabil",
    marks: [30, 35, 40, 25]
}));
