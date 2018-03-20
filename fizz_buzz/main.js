// Option 1
function fizzBuzz(num) {
  if(num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz'
  } else if (num % 5 === 0) {
    return 'buzz'
  }
    return ''
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(15));
console.log(fizzBuzz(10));
console.log(fizzBuzz(8));

// Option 2
function fizzBuzz1(num) {
  let word = '';
  if (num % 3 === 0) {
    word = word.concat('fizz');
  }
  if (num % 5 === 0 ){
    word = word.concat('buzz');
  }
  return word;
}

console.log(fizzBuzz1(3));
console.log(fizzBuzz1(15));
console.log(fizzBuzz1(10));
console.log(fizzBuzz(8));

// Option 3
for (let n = 1; n <= 30; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

// Option 4
for( i = 0 ; i < 100;)
console.log(( i++ % 3 ? '' : 'Fizz') + ( i % 5 ? '' : 'Buzz') || i)