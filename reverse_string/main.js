function reverseString(word) {
  let reverseWord = word.split('').reverse().join('');
  // reverseWord = reverseWord.reverse();
  // reverseWord = reverseWord.join('');

  return reverseWord;
}

console.log(reverseString('codeexmachina'));
console.log(reverseString('javascript'));
////////////////////////////////////////////////////////////////////////////

function reverseString0(word) {
  return word
          .split('')
          .reverse('')
          .join('');
}

console.log(reverseString0('codeexmachina'));
console.log(reverseString0('javascript'));
////////////////////////////////////////////////////////////////////////////

// For loop
function reverseString1(word) {
  let reverseWord1 = '';

  for(let i = word.length - 1; i >= 0 ; i--) {
    reverseWord1 += word[i];
  }

  return reverseWord1;
}

console.log(reverseString1('codeexmachina'));
console.log(reverseString1('javascript'));
////////////////////////////////////////////////////////////////////////////

// Using Recursion
function reverseString2(str) {
  if (str === '') {
    return '';
  } else { 
    return reverseString2(str.substr(1)) + str.charAt(0);
 }
}

console.log(reverseString2('codeexmachina'));
console.log(reverseString2('javascript'));
////////////////////////////////////////////////////////////////////////////

// ES6
function rev(str){
let revString = '';
for (let char of str) {
  revString = char + revString;
}
return revString;
}
console.log(rev('codeexmachina'));
console.log(rev('javascript'));
////////////////////////////////////////////////////////////////////////////

