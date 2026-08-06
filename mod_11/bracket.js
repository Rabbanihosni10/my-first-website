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

console.log(person.favSong);
console.log(person.favSong.band);
console.log(person['age']);
console.log(person['favSong']);
console.log(person['home address']);