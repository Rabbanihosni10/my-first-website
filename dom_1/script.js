// // console.log("Hello World!");
// // console.log("This is a console test");
// // alert("Hello World!");
// // alert("This is a alert test");

// // console.log(window);
// // window.console.log("gekko");

// // console.dir(window);
// // console.dir(window.document);
// // console.dir(document.head);
// // console.dir(document);
// // console.dir(document.body);
// // console.log(document.body);
// // console.dir(document.body.childNodes[1]);
// // console.dir(document.body.childNodes[1].innerText="abcd");

// // let heading=document.getElementById("heading");
// // console.dir(heading);
// // console.log(heading);

// // let heading2=document.getElementsByClassName("heading");
// // console.dir(heading2);
// // console.log(heading2);

// // let paras=document.getElementsByTagName("p");
// // console.dir(paras);
// // console.log(paras);


// // let firstElem=document.querySelector("p");
// // console.dir(firstElem);
// // let firstElem=document.querySelector(".heading-class");
// // console.dir(firstElem);
// // let firstElem=document.querySelector("#btn");
// // console.dir(firstElem);
// // let allElem=document.querySelectorAll("p");
// // console.dir(allElem);

// // console.dir(document.body.firstChild);
// // console.dir(document.querySelector("div").children);
// // console.dir(document.querySelector("div").firstChild)
// // console.dir(document.querySelector("div").lastChild)

// // let div=document.querySelector("div");
// // console.dir(div);

// // let heading=document.querySelector("h1");
// // console.dir(heading);

// // let he2=document.querySelector("h2");
// // console.dir(he2);
// // console.dir(he2.innerText);
// // console.dir(he2.innerText=he2.innerText+" from Apna College Students");


// // let box=document.querySelectorAll(".box");
// // console.dir(box);

// // // console.dir(box[0].innerHTML="<h1>Box 1</h1><p>This is box 1</p>");
// // // console.dir(box[1].innerHTML="<h1>Box 2</h1><p>This is box 2</p>");
// // // console.dir(box[2].innerHTML="<h1>Box 3</h1><p>This is box 3</p>");

// // let idx=1;
// // for( let div of box){
// //     console.log(div.innerText=`New Unique value ${idx}`);
// //     idx++;
// // }


// // let div=document.querySelector("#box")
// // console.dir(div);
// // div.style.backgroundColor="yellow";
// // console.dir(div);
// // div.style.fontSize="30px";
// // // div.innerText="Hello";
// // // div.style.visibility="hidden";
// // // let id=div.getAttribute("id");
// // // console.log(id);
// // let name=div.getAttribute("name");
// // console.log(name);


// // let pera=document.querySelector(".paragraph");
// // console.dir(pera.getAttribute("class"));
// // console.dir(pera.setAttribute("class","new_class"));
// // console.dir(pera.getAttribute("class"));


// let newBtn=document.createElement("button");
// newBtn.innerText="Click Me";
// console.dir(newBtn);
// // div.appendChild(newBtn);


// let div=document.querySelector("div");
// // div.append(newBtn);
// // div.prepend(newBtn);
// // div.before(newBtn);
// div.after(newBtn);

// let newHeading=document.createElement("h1");

// newHeading.innerHTML="<h1>New Heading</h1>";
// document.querySelector("body").prepend(newHeading);

// newHeading.remove();


let newBtn=document.createElement("button");
// newBtn.innerHTML="<h1>New Button</h1>";
newBtn.innerText="Click Me";
console.dir(newBtn);
newBtn.style.backgroundColor="red";
newBtn.style.color="white";
document.querySelector("body").prepend(newBtn);


let pera=document.querySelector("p");
console.dir(pera);
pera.setAttribute("class","new_class");
pera.getAttribute("class");
