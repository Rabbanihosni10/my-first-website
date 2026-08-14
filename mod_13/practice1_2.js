// 4B : Remove first and last character


// let inp="hello";


function removeFirstAndLast(str) {
  // TODO: slice out the middle portion of the string
  let str1="";
  for(let i=1; i<str.length-1 ;i++){
    str1+=str[i];
  }
  return str1;
}
 
console.log(removeFirstAndLast("hello")); // Expected: "ell"
console.log(removeFirstAndLast("Bajrangi"));
console.log(removeFirstAndLast("Jews"));


//5A: Is palindrome or not 

function isPalindrome(str) {
  // TODO: reverse the string and compare it to the original
  let str1="";
  let revstr1="";
  for (let i=0; i<str.length;i++){
    str1+=str[i]
  }
  for (let i=str.length-1; i>=0;i--){
    revstr1+=str[i];
  }
  if (str1===revstr1){
    return true;
  }
  else{
    return false;
  }
}
 
console.log(isPalindrome("level")); // Expected: true
console.log(isPalindrome("hello")); // Expected: false

// 5B 
// Find the Shortest Word in a Sentence 

function findShorestWord(sentence){
    let     
}

