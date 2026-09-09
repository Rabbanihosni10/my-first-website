"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// usually interface will be used from now onwards in everywhere
const mashfee = {
    name: "Mashfee",
    age: 22,
    email: "mashfee@example.com",
    isAdmin: true,
    salary: 50000,
    institution: "Queen's University"
};
const robin = {
    name: "Robin",
    age: 22,
    email: "robin@example.com",
    isAdmin: false
};
const team = [mashfee, robin, {
        name: "Shahrin",
        age: 24,
        email: "shahrin@example.com",
        isAdmin: false,
        salary: 40000
    }];
console.log(team);
function printUser(user) {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
    console.log(`Is Admin: ${user.isAdmin}`);
}
printUser(mashfee);
printUser({ name: "elon", age: 40, email: "elon@example.com", isAdmin: true });
function printTeam({ teamName, members }) {
}
//# sourceMappingURL=interface.js.map