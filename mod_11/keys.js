const person={
    name: 'Tobarok ALI',
    profession: "Student",
    age:25,
    isSingle: true,
    favSong: {band:"ArtCell",song: "Oniket Prantor"},
    "parent:name": "kodom Ali",
    'home address': 'NewKhali'

}
console.log(person);

console.log("========");
console.log("Alll keys:");
const keys=Object.keys(person);
console.log(keys);


console.log("========");
console.log("All Values:")
const values=Object.values(person);
console.log(values);


delete person.isSingle;
delete person['age'];

console.log(person);

console.log(keys);
console.log(values);