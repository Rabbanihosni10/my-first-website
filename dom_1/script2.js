let btn=document.querySelector("#btn1");
btn.addEventListener("click",function(){
    console.log("Button Clicked");
    alert("Button Clicked");
});

var btn2=document.getElementById("btn2");

btn2.addEventListener("dblclick",function(){
    console.log("Button 2 Double Clicked");
    alert("Button 2 Double Clicked");
});

var div=document.querySelector("#input");
div.addEventListener("mouseover",function(){
    console.log("We are going inside!");
    alert("We are going inside!");
});

let div2=document.querySelector("#output");
div2.addEventListener("mouseout",function(){
    console.log("We are going outSide!");
    alert("We are going outSide!");
});

