function reverse(arr) {
  const reverseArr = new Array(arr.length);

  for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
    reverseArr[j] = arr[i];
  }
  for (let element of reverseArr) {
    console.log(element);
  }
}

reverse([1,2,3]);
reverse(['1st', '2nd', '3rd']);