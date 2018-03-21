function diffArray(arr1, arr2) {
  let uniqueArray = [];

  for (let val of arr1) {
    // if(arr2.includes(val) === false && uniqueArray.includes(val) === false) {
    if(!arr2.includes(val) && !uniqueArray.includes(val)) {
      uniqueArray.push(val);
    }
  }

  for (let val of arr2) {
    // if(arr1.includes(val) === false && uniqueArray.includes(val) === false) {
    if(!arr1.includes(val) && !uniqueArray.includes(val)) {
      uniqueArray.push(val);
    }
  }

  return uniqueArray;
}

console.log(diffArray([1,2,3,5],[1,2,3,4,5]));
console.log(diffArray([1,'calf',3,'piglet'],[7,'filly']));
console.log(diffArray([2,1,3],[3,2,1]));