let btn=document.querySelector("button");
let currBtn="light"; 
btn.addEventListener("click",()=>{
    // console.log(
    //     "You are trying to change the mode!"
    // );
    if(currBtn==="light"){
        currBtn="dark";
        btn.style.backgroundColor="black";
        btn.style.color="white";
        document.body.style.backgroundColor="black";
        console.log(
            "Dark Mode Activated!"
        );
    }else{
        currBtn="light";
        btn.style.backgroundColor="white";
        btn.style.color="black";
        document.body.style.backgroundColor="white";
        console.log(
            "Light Mode Activated!"
        );
    }
})