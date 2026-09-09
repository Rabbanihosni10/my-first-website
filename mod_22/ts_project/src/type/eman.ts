enum Day{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

let offDay=Day.Sunday;

console.log(Day.Thursday);
console.log(Day.Monday);

// if(offDay=== Day.Sunday || offDay===Day.Friday){
    
// }

enum Roles{
    Admin = "Admin",
    Moderator="Mpderator",
    Guest="Guest"
}

console.log(Roles.Admin);

const nandu={
    name:"Chandu",
    role: Roles.Admin
}
console.log(nandu);

enum Priority{
    Low,
    Moderate,
    Medium,
    High,
    Urgent
}

enum APIStatus{
    Loading="Loading",
    Success="Success",
    Error="Error"
}