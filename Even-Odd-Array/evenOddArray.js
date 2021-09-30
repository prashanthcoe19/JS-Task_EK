const evenOdd = (arr) => {
  let even = [];
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  console.log(`Even numbers are: ${even}`);
  console.log(`Odd numbers are: ${odd}`);
};
evenOdd([1, 2, 3, 4, 5]);
