
function amendSent(str){
let res = str.replace(/[A-Z][^A-Z]*/g, word => word + ' ').trim().toLowerCase();

return res;
}
console.log(amendSent('EverythingIsAwesome!'));

// Option 2
function amendTheSentence(s) {
  return s.replace(/[A-Z]/g, function(m) { return " " + m.toLowerCase() })
          .replace(/^ /, "");
}

console.log(amendTheSentence("CodefightsIsAwesome"));
console.log(amendTheSentence("noCapitalOnFirstWord"));
console.log(amendTheSentence("ThereIsNobodyCrazierThanI"));
