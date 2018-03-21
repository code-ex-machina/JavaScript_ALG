function missingNumber(numArray) {
  const numberArray = numArray.sort((num1, num2) => {
    return num1 - num2;
  });

  for (let i = 0; i < numberArray.length; i++) {
      if ( i !== numberArray[i]) {
        return i;
      }
  }
}
console.log(missingNumber([0,3,5,8,4,6,1,9,7]));
console.log(missingNumber([1,2,5,0,6,7,9,3,4]));

// Option 2
let intArray = [9,1,5,8,7,4,3,0,10,13,15,19,12,16,18];  // Missing 2,6,11,14,17
let arrayLength = Math.max.apply(Math, intArray);
let missing = []

for ( var i = 0; i < arrayLength; i++ ) {
    if ( intArray.indexOf(i) < 0 ) {
        missing.push( i );
    }
}

console.log( missing );