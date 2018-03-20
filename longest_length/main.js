function longestWordLength(str) {
  let longestLength = 0;
  let strArray = str.split(' '); // split on empty space

  for( let i = 0 ; i < strArray.length; i++ ){
    if(longestLength < strArray[i].length) {
        longestLength = strArray[i].length;
    }
  }

  return longestLength;
}

console.log(longestWordLength('I am a coding machine'));
console.log(longestWordLength('I would like to work for Amazon'));
console.log(longestWordLength('All code and no fun makes Jack a dull boy'));


// Ternery Operator
function longestWordLength1(str) {
  let longestLength = 0;
  let strArray = str.split(' '); // split on empty space

  for( let i = 0 ; i < strArray.length; i++ ){
    longestLength = longestLength < strArray[i].length ? strArray[i].length : longestLength;
  }

  return longestLength;
}

console.log(longestWordLength1('I am a coding machine'));
console.log(longestWordLength1('I would like to work for Amazon'));
console.log(longestWordLength1('All code and no fun makes Jack a dull boy'));


// For Each Loop
function longestWordLength2(str) {
  let longestLength = 0;
  let strArray = str.split(' '); // split on empty space

  strArray.forEach((word) => {
    longestLength = longestLength < word.length ? word.length : longestLength;    
  });

  return longestLength;
}

console.log(longestWordLength2('I am a coding machine'));
console.log(longestWordLength2('I would like to work for Amazon'));
console.log(longestWordLength2('All code and no fun makes Jack a dull boy'));

// Sort Method
function longestWordLength3(str) {
  let longestLength = 0;
  let strArray = str.split(' ');

  strArray = strArray.sort((word1, word2) => {
    return word1.length < word2.length;
  });

  return strArray[0].length;
}

console.log(longestWordLength3('I am a coding machine'));
console.log(longestWordLength3('I would like to work for Amazon'));
console.log(longestWordLength3('All code and no fun makes Jack a dull boy'));