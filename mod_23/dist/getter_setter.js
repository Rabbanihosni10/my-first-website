"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    _name;
    _age;
    _email;
    constructor(name, age, email) {
        this._name = name;
        this._age = age;
        this._email = email;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0 || value > 100) {
            throw new Error("Age is not valid");
        }
        this._age = value;
    }
}
const user = new User("Abul", 23, "abul@kabul.com");
const tobarok = user._name;
user._name = "tobarok";
console.log(tobarok);
user._age = 49;
console.log(user._name);
console.log(user);
console.log(user_age);
// getter (get) - can never pass any argument . Only some compitition and return value
// setter(set)- have some argument in it but never can return just throw only
//
//# sourceMappingURL=getter_setter.js.map