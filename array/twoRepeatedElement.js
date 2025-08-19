//www.geeksforgeeks.org/problems/two-repeated-elements-1587115621/1

function twoRepeatedElement(arr) {
  // code here
  let hash = {};
  let ans = [];

  for (let num of arr) {
    if (hash[num] !== undefined) {
      ans.push(num);
    } else {
      hash[num] = 1;
    }
  }

  return ans;
}

function twoRepeatedElement(arr) {
  // code here
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let index = Math.abs(arr[i]) - 1;

    if (arr[index] > 0) {
      arr[index] = -arr[index];
    } else {
      ans.push(index + 1);
    }
  }
  return ans;
}
