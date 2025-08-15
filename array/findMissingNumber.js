const findMissingNumber = (nums) => {
  const n = nums.length;
  let numsSum = 0;
  let expectedSum = (n * (n + 1)) / 2;

  for (let num of nums) {
    numsSum += num;
  }
  return expectedSum - numsSum;
};
