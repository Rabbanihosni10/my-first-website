const commitment='I will work hand and will neer give up.';
// reverse this = '.pu evig reven lliw dna drad krow lliw I'
const commitment1=commitment;

const parts =commitment.split('');
console.log(parts);
// break;
// const revCommitment=commitment.revese();

const revParts=parts.reverse();
console.log(parts);
console.log(revParts);


const reversedCommitment=revParts.join('');
console.log(reversedCommitment);

// string --> spilt('') --> .reverse() --> .join() --> console.log()

let reverseCom='';
for(const letter of commitment1){
    console.log(letter);
    reverseCom=letter+reverseCom;
    console.log(letter,"==>",reverseCom);

}
console.log(reverseCom);