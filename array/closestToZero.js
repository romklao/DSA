//www.geeksforgeeks.org/problems/two-numbers-with-sum-closest-to-zero1737/1

https: function closestToZero(arr, n) {
  // code here
  arr.sort((a, b) => a - b);

  let l = 0;
  let r = arr.length - 1;
  let closestSum = Infinity;

  while (l < r) {
    let currSum = arr[l] + arr[r];

    if (Math.abs(currSum) < Math.abs(closestSum)) {
      closestSum = currSum;
    } else if (
      Math.abs(currSum) === Math.abs(closestSum) &&
      currSum > closestSum
    ) {
      closestSum = currSum;
    }

    if (currSum === 0) {
      return 0;
    } else if (currSum < 0) {
      l++;
    } else {
      r--;
    }
  }
  return closestSum;
}
