function findBitonicPoint(arr) {
  // your code here
  let n = arr.length;
  let l = 0;
  let r = n - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return arr[mid];
    } else if (arr[mid] > arr[mid - 1]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
}
