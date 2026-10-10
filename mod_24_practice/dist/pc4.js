"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateTotalListeningTime = (tracks) => {
    return tracks.reduce((sum, item) => sum + item.minutes, 0);
};
const tracks = [
    { title: "Blinding Lights", minutes: 3 },
    { title: "Levitating", minutes: 4 },
    { title: "Peaches", minutes: 3 }
];
console.log(calculateTotalListeningTime(tracks));
// 10
// another example:
const tracks2 = [
    { title: "Flowers", minutes: 3 },
    { title: "Anti-Hero", minutes: 4 }
];
console.log(calculateTotalListeningTime(tracks2));
// 7
//# sourceMappingURL=pc4.js.map