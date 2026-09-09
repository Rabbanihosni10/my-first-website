"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
let offDay = Day.Sunday;
console.log(Day.Thursday);
console.log(Day.Monday);
// if(offDay=== Day.Sunday || offDay===Day.Friday){
// }
var Roles;
(function (Roles) {
    Roles["Admin"] = "Admin";
    Roles["Moderator"] = "Mpderator";
    Roles["Guest"] = "Guest";
})(Roles || (Roles = {}));
console.log(Roles.Admin);
const nandu = {
    name: "Chandu",
    role: Roles.Admin
};
console.log(nandu);
var Priority;
(function (Priority) {
    Priority[Priority["Low"] = 0] = "Low";
    Priority[Priority["Moderate"] = 1] = "Moderate";
    Priority[Priority["Medium"] = 2] = "Medium";
    Priority[Priority["High"] = 3] = "High";
    Priority[Priority["Urgent"] = 4] = "Urgent";
})(Priority || (Priority = {}));
var APIStatus;
(function (APIStatus) {
    APIStatus["Loading"] = "Loading";
    APIStatus["Success"] = "Success";
    APIStatus["Error"] = "Error";
})(APIStatus || (APIStatus = {}));
//# sourceMappingURL=eman.js.map