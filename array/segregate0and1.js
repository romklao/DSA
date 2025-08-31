//www.geeksforgeeks.org/problems/segregate-0s-and-1s5106/1

function swap(arr, i, j) {
  let c = arr[i];
  arr[i] = arr[j];
  arr[j] = c;
}

function segregate0and1(arr) {
  // code here
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    while (left < right && arr[left] === 0) left++;
    while (left < right && arr[right] === 1) right--;

    if (arr[left] > arr[right]) {
      swap(arr, left, right);
    }
  }
  return arr;
}
