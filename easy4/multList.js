function multiplyList(arr1, arr2) {
  const arr = [...arr1];
  return arr.reduce((acc, val, idx) => {
    acc.push(val * arr2[idx]);
    return acc;
  }, []);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));