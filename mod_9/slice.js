const numbers=[1,2,3,4,5,6,7,8,9];
const slice= numbers.slice(2,5);

console.log(slice);  // this will return a portion of the array from index 2 to index 4
console.log(numbers);

const parts=numbers.splice(2,2);
console.log(parts);  // this will return a portion of the array from index 2 to index 3 and also remove those elements from the main array
console.log(numbers);


// slice doesnt change the main array but splice does change the main array by removing the elements from it.
