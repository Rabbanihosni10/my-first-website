<?php

$name="Sumit";
echo "Hi ". $name . "\n";
echo "Hi $name\n";

$skills=["Javascript","React","Node"];   // Array
$project=["title"=>"Todo App","Stars"=>10]; // Associated Array

echo $project["title"]."\n";
//
foreach($skills as $skill){
    echo $skill . "\n";
}

//
function greet($name){
    return "Hello".$name;
}

echo greet("Sumit")."\n";



//
class User{
    public function __construct(public $name){}
}

$user=new User("Sumit");

echo $user->name ."\n";



//
if($project["stars"]>=50){
    echo "Famous Project\n";
}elseif($project["stars"]>=10){
    echo "Popular Projectr\n";
}else{
    echo "New project\n";
}



//
class Project {
    public static function create($title){
        return "Created".$title;
    } 
}

echo Project::create("Portfolio")."\n";



//
function handle($path,$callback){
    echo $path."->".$callback()."\n";
}

handle("/",function(){
    return "Homepage";
})




// $ --> variable//
// . --> join string//
// -> --> to get inside object//
// :: --> scope resolution operator --> to called from class directly like we use static inside the js//
//