// 3 A : Product of Digits
// 
// Input: a number
// Output: product of its digits
// Returns: a number
 
// Input: a number
// Output: product of its digits
// Returns: a number
 
function productOfDigits(num) {
  let str = num.toString();
  console.log(str);
  let total = 1;
//   // TODO: loop through each character, convert to number, and multiply
  for(let i of str){
    total*=i;
  }
  return total;
}
 
console.log(productOfDigits(123));  // Expected: 6
console.log(productOfDigits(4040)); // Expected: 0







// 3B : Odd numbers up to N
function getOddNumbers(n){
    let odds=[];
    for(let i=1;i<=n;i++){
        if(i%2!==0){
            odds.push(i);
        }
        else{
            continue;
        }
    }
    return odds;
}

console.log(getOddNumbers(10));


// 4A : Count Vowels 

function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  let consCount=0;
  for(let i=0;i<str.length;i++){
    if(vowels.includes(str[i])){
        count+=1;
    }
    else{
        consCount+=1;
    }
    // if ((str[i]==="a") || (str[i]==="e") || (str[i]==="i") || (str[i]==="o") || (str[i]==="u") || (str[i]==="A") || (str[i]==="E") || (str[i]==="I") || (str[i]==="O") || (str[i]==="U")){
    //     count+=1;
    // }
    // else{
    //     continue;
    // }
  }
  console.log("Here consonent is:",consCount);
  return count;
}
 
console.log(countVowels("javascript")); // Expected: 3
console.log(countVowels("java")); // Expected: 3
console.log(countVowels("python")); // Expected: 3
console.log(countVowels("kotlin")); // Expected: 3


