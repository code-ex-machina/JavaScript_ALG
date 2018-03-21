function sumAll(numArray) {
  const min = Math.min(...numArray);
  const max = Math.max(...numArray);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumAll([10,5]));
console.log(sumAll([3,7]));