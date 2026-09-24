"use strict";
/**
 * balance
 * pin
 * phone number
 * history
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
//access modifier--> public,private,protected
// class BkashAccount{
//     public phone:string
//     public balance:number
//     private pin:number
//     protected history:any=[]
//     constructor(phone:string,balance:number,pin:number){
//         this.phone=phone
//         this.balance=balance
//         this.pin=pin
//     }
//     if()
// }
// const bkashAcc=new BkashAccount("01410667446",5000,1234);
// console.log(bkashAcc);
/**
 * balance
 * pin
 * phone
 * history
 */
//access modifier - public, private, protected
class BkashAccount {
    phone;
    balance;
    pin;
    history = [];
    constructor(phone, balance, pin) {
        this.phone = phone;
        this.balance = balance;
        this.pin = pin;
    }
    // method
    getBalance(pin) {
        if (this.pin === pin) {
            return this.balance;
        }
        return `Incorrect Pin`;
    }
}
const bkashAcc = new BkashAccount("01732268241", 5000, 123);
// const balance:number= bkashAcc.balance;
// console.log(bkashAcc);
// console.log(balance);
console.log(bkashAcc.getBalance(1234));
console.log(bkashAcc.getBalance(123));
// console.log(bkashAcc.balance);
// console.log(bkashAcc.pin);
// bkashAcc.balance=0;
// console.log(bkashAcc.balance,bkashAcc.pin);
//in protected -- we can access from a class and its sub class
// in private -- we can access from a class
// in public -- we can access from everywhere
//# sourceMappingURL=access_modifier.js.map