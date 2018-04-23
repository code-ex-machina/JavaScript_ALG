function titleCase(str){
  let titelCaseSentence = str.split(' ');

  titelCaseSentence = titelCaseSentence.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();

    word = firstLetter.concat(word.slice(1, word.length));

    return word;
  });

  titelCaseSentence = titelCaseSentence.join(' ');

  return titelCaseSentence;
}

console.log(titleCase('i am a coding machine'));
console.log(titleCase('i would like to work for google'));

// Shorter
function capitalize(str){
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

console.log(capitalize('i am a coding machine'));
console.log(titleCase('i would like to work for google'));


