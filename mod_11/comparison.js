const subject= 'chemistry';
const book= 'Chemistry';

console.log(book);
console.log(book.toLowerCase());
console.log("================");
console.log(subject);
console.log(subject.toUpperCase());
if(subject===book.toLowerCase()){
    console.log("Poire pora fatai felbo");
}
else{
    console.log("Eiber ki autopass ase?");
}

//Js is case sensitive


const emailUserProvided='goni@Mia.com ';
const emailSavedInDatavase='  goni@mia.com  ';
console.log("#######"+emailSavedInDatavase+"######");
console.log("#######"+emailSavedInDatavase.trimStart()+"######");
console.log("#######"+emailSavedInDatavase.trimEnd()+"######");
console.log("#######"+emailSavedInDatavase.trimEnd().trimStart()+"######");
console.log("#######"+emailSavedInDatavase.trim().toUpperCase()+"######");

if(emailUserProvided === emailSavedInDatavase){
    console.log("Welcome to the website!");
}
else{
    console.log("DGM---> Duur e jeye morobba kha!");
}

// const emailUserProvided='goni@Mia.com';
// const emailSavedInDatavase='goni@mia.com';
// if(emailUserProvided.toLowerCase()===emailSavedInDatavase.toLowerCase()){
       
// }