let name="Sumit";
console.log("Hi"+name);
console.log(`Hi ${name}`);

const skills=["Javascript","React","Node"];      // Array
 
const project= {title:"Todo App", stars: 10};    // Object

console.log(project.title);


skills.forEach((sklill)=>console.log(sklill));


//function

function greet(name){
    return "Hello"+name;
}

console.log(greet("Rabbani"));


class User{
    constructor(name){
        this.name=name;
    }
}
const user=new User("Sumit");

console.log(User.name);



if(project.stars >=50){
    console.log("Famous Project");
}
else if(project.stars >=10){
    console.log("Popular project");
}
else{
    console.log("New project");
}




class Project{
    static create(title){
        return "Created "+title;
    }
}

console.log(Project.create("Portfolio!"));


function handle(path,callback){
    console.log(path+"->"+callback());
}


handle("/",()=>"Homepage");