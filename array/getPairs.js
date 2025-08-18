//www.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1

https: function getPairs(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let pairs = [];
  let left = 0;
  let right = sortedArr.length - 1;

  while (left < right) {
    const sum = sortedArr[left] + sortedArr[right];

    if (sum === 0) {
      pairs.push([sortedArr[left], sortedArr[right]]);

      let leftValue = sortedArr[left];
      let rightValue = sortedArr[right];

      while (left < right && sortedArr[left] === leftValue) {
        left++;
      }
      while (left < right && sortedArr[right] === rightValue) {
        right--;
      }
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
}
