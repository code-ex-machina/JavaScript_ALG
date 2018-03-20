function isPalindrome(str) {
  let forwardStr = str.toLowerCase();
  let reversedStr;

  forwardStr = forwardStr.replace(/[\W_]/g, '') // removes anything that is not of the word & _
  reversedStr = forwardStr.split('').reverse().join('');

  return forwardStr === reversedStr;
}

console.log(isPalindrome('A man, a plan, a canal. Panama'));
console.log(isPalindrome('My age is 0, 0 si ega ym.'));
console.log(isPalindrome('_codeexmachina'));
console.log(isPalindrome('legendary'));
console.log(isPalindrome('.0_0(:/-\:)0-0'));

// Shorter
function isPalindrome1(str) {
  let forwardStr = str.toLowerCase().replace(/[\W_]/g, '');
  let reversedStr = forwardStr.split('').reverse().join('');

  return forwardStr === reversedStr;
}

console.log(isPalindrome1('A man, a plan, a canal. Panama'));
console.log(isPalindrome1('My age is 0, 0 si ega ym.'));
console.log(isPalindrome1('_codeexmachina'));
console.log(isPalindrome1('legendary'));
console.log(isPalindrome1('.0_0(:/-\:)0-0'));

// Using For Loop
function palindrome(str) {
  let re = /[\W_]/g;
  str = str.toLowerCase().replace(re, '');
  let len = str.length;
  for (let i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]){
      return false;
    }
  }
  return true;
}

console.log(palindrome('A man, a plan, a canal. Panama'));
console.log(palindrome('My age is 0, 0 si ega ym.'));
console.log(palindrome('_codeexmachina'));
console.log(palindrome('legendary'));
console.log(palindrome('.0_0(:/-\:)0-0'));
