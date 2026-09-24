"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    email;
    age;
    marks;
    constructor(name, email, age, marks) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.marks = marks;
    }
    getInfo() {
        const info = `Name: ${this.name}\nEmail:${this.email}`;
        return info;
    }
}
const rabbani = new Student("Rabbani", "rabbanihosni10@gmail.com", 25, 61);
const rafi = new Student("Rafi", "rafi@gmail.com", 16, 75);
const sadia = new Student("Sadia", "sadia@gmail.com", 25, 92);
console.log(rafi.getInfo());
console.log(sadia.getInfo());
/**
 * cha er dokan
 *
 * title
 * sold
 */
class ChaShop {
    title;
    sold;
    soldItems = [];
    constructor(title, sold) {
        this.title = title;
        this.sold = sold;
    }
    buy(name, price) {
        this.soldItems.push({ name, price });
    }
    totalSold() {
        const total = this.soldItems.reduce((acc, items) => acc + items.price, 0);
        return total;
    }
}
const shop1 = new ChaShop("Rahim er cha ghor", 465);
shop1.buy("Tea", 10);
console.log(shop1);
shop1.buy("Cake", 60);
console.log(shop1);
console.log(shop1.totalSold());
//# sourceMappingURL=method.js.map