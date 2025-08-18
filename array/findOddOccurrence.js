//https://www.naukri.com/code360/problems/find-odd-occurrence-element_1062620

function findOddOccurrence(nums) {
  let hash = {};
  for (let num of nums) {
    if (hash[num]) {
      hash[num] += 1;
    } else {
      hash[num] = 1;
    }
  }
  for (let key in hash) {
    if (hash[key] % 2 !== 0) {
      return key;
    }
  }
  return -1;
}
