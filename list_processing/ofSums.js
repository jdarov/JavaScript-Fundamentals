function sumOfSums(nums) {
  if (!Array.isArray(nums) || nums.length < 1) return 0;
  if (nums.length === 1) return nums[0];
  
  const copy = [...nums];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += copy.reduce((acc,val) => acc + val);
    copy.pop();
  }
  return sum;
}

console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1, 2, 3, 4, 5]));