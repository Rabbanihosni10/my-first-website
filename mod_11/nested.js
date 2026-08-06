const college={
    name: "BNMPC",
    address: "Dhanmondi",
    events: ['21 February', 'Independence day', 'Science fair', 'Sports day', 'Vijay dibosh'],
    students: 800,
    people: {
        count: 200,
        principal: {
            name: 'lft. Col. Sabur Ahmed',
            yearsOfExp: 25,
            degree: "BSc",
            institute: "BMA"
        }
    }
}

console.log(college);
console.log(college.people.count);
console.log(college.people.principal);
console.log(college.people.principal.degree);
console.log(college['people']['principal']['institute']);
college.events[2]='Eid Ul Adha';
console.log(college);