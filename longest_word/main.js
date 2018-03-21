function largestWord(str) {
  let filteredArray = str.replace(/[\W_]/g, ' ').split(' ');
  let lgWord = '';
  
  filteredArray.forEach((word) => {
    lgWord = word.length > lgWord.length ? word : lgWord;
  });

  return lgWord;
}

console.log(largestWord('Ready, steady, go!'));
console.log(largestWord('Ready[[[, steady, go!'));
console.log(largestWord('ABCd'));