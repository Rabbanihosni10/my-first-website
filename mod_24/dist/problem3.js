"use strict";
// using type 
Object.defineProperty(exports, "__esModule", { value: true });
const formatUserProfile = (player) => {
    // return `player.`
    return `${player.name} is ${player.age} years old and lives in ${player.city}`;
};
console.log(formatUserProfile({
    name: "Fahim",
    age: 22,
    city: "Dhaka"
}));
//# sourceMappingURL=problem3.js.map