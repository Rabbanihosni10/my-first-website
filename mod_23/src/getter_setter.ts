class User{
    private _name:string
    private _age:number
    private _email:string
    constructor(name:string, age:number, email:string){
        this._name=name;
        this._age=age;
        this._email=email;
    }
    get age():number{
        return this._age;
    }
    set age(value:number){
        if(value<0 || value>100){
            throw new Error("Age is not valid");
        }
        this._age=value;
    }
}

const user=new User("Abul",23,"abul@kabul.com");
const tobarok=user._name;
user._name="tobarok";
console.log(tobarok);
user._age=49;
console.log(user._name);
console.log(user);
console.log(user_age);


// getter (get) - can never pass any argument . Only some compitition and return value
// setter(set)- have some argument in it but never can return just throw only
//