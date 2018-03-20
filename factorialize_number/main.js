function facNum(num1) {
  let product = 1;

  for ( let i = 2; i <= num1; i++) {

    product *= i;
  }

  return product;
}

console.log(facNum(5));
console.log(facNum(4));
console.log(facNum(1));
console.log(facNum(0));
console.log(facNum(10));

// Using While loop
function factorialize(num) {
  let answer = 1;
  while (num > 1) {
  // answer = answer * num;
  answer *= num;
  num--;
  }
  return answer;
}
  
console.log(factorialize(5));

// Using Recursion
let answer1 = 1;
function factorialize1(num) {
  answer1 *= num;
  num--;
  if (num > 1) {
    factorialize1(num);
  }
  return answer1;
}

console.log(factorialize1(5));

// Setting let answer be global withing a function
function factorialize2(num) {
  let answer2 = 1;
  innerFunc(num);
  function innerFunc(input) {
    answer2 *= num;
    num--;
    if (num > 1) {
      innerFunc(num);
    }
  }
  return answer2;
}

console.log(factorialize2(5));

