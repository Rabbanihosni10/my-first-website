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
let div3=document.createElement("div");
div3.innerText="Garry";
div3.style.fontSize="20px";
div3.style.backgroundColor="red";
div3.style.color="white";
div3.style.height="100px";
div3.style.width="100px";
div3.style.textAlign="center";
console.dir(div3);
div3.addEventListener("mouseenter",function(){
    console.log("Yo, You touched me!");
})
document.body.appendChild(div3);


let art=document.querySelector("article");
art.style.border="1px solid black";
art.style.height="100px";
art.style.width="100px";
art.style.textAlign="center";
art.onclick=(e)=>{
    console.log(e);
    console.log(e.target);
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
};