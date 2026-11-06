// console.log("Hello World!");
// console.log("This is a console test");
// alert("Hello World!");
// alert("This is a alert test");

// console.log(window);
// window.console.log("gekko");

// console.dir(window);
// console.dir(window.document);
// console.dir(document.head);
// console.dir(document);
// console.dir(document.body);
// console.log(document.body);
// console.dir(document.body.childNodes[1]);
// console.dir(document.body.childNodes[1].innerText="abcd");

let heading=document.getElementById("heading");
console.dir(heading);
console.log(heading);

let heading2=document.getElementsByClassName("heading");
console.dir(heading2);
console.log(heading2);

let paras=document.getElementsByTagName("p");
console.dir(paras);
console.log(paras);


// let firstElem=document.querySelector("p");
// console.dir(firstElem);
// let firstElem=document.querySelector(".heading-class");
// console.dir(firstElem);
let firstElem=document.querySelector("#btn");
console.dir(firstElem);
let allElem=document.querySelectorAll("p");
console.dir(allElem);