const uber = (arr) => {
  let arr2 = [];
  let product = 1;
  let count = 0;
  let zero = false;
  //check to see if array has zeros or not if yes then count number of zeros and also calculate product;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      count++;
      zero = true;
      continue;
    }
    product = product * arr[i];
  }
  // if there are more than two zeroes the output array will all be zeros;
  if (count > 1) return arr2.fill(0);

  for (let e of arr) {
    zero == true
      ? e === 0
        ? arr2.push(product)
        : arr2.push(0)
      : arr2.push(product / e);
  }
  return arr2;
};
console.log(uber([1, 2, 3, 4, 0]));
console.log(uber([1, 2, 3, 4, 5]));
