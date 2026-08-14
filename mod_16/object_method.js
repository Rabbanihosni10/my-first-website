// object methods: keys, values, entities, delete, seal, freeze 

const user={
    name:"John Doe",
    age:35,
    id:22201501
}
const keys=Object.keys(user);
const values=Object.values(user);
const enteries=Object.entries(user);

console.log(keys,values,enteries);
for(let elem of keys){
    console.log(elem,user[elem]);
}

//Seal && Freeze
const bankAccount={
    accountNumber: "1234",
    balance: 5000

}

Object.seal(bankAccount);
delete bankAccount.balance;
bankAccount.nomineeName="Something";


const birthCertificate={
    name: "Rabbani",
    birthDate: "5-5-26"
}

Object.freeze(birthCertificate);
delete birthCertificate.name;
console.log(birthCertificate);