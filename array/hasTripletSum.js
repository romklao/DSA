// https://www.geeksforgeeks.org/problems/triplet-sum-in-array-1587115621/1

function hasTripletSum(arr, target) {
  // code here
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];

      if (sum === target) {
        return true;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return false;
}
