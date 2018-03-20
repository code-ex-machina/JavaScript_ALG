function introduction(firstName, lastName) {
  const introduction = 'Hi, my name is '.concat(firstName, " ", lastName, ".");

  return introduction;
  
}

function introduction2(firstName, lastName) {
  const introduction2 = 'Hi, my name is ' + firstName + ' ' + lastName + '.';

  return introduction2
}


  // ES6 way
  function introduction3(firstName, lastName) {
    const introduction2 = `Hi, my name is ${firstName} ${lastName}.`;
  
    return introduction2
}

console.log(introduction('Nick', 'Skali'));
console.log(introduction2('Bobby', 'Billy'));
console.log(introduction3('Ticky', 'Tacky'));
