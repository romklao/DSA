// https://leetcode.com/problems/majority-element-ii/description/

function majorityElement(nums) {
  let hash = {};
  let res = [];

  for (let num of nums) {
    if (hash[num] !== undefined) {
      hash[num] += 1;
    } else {
      hash[num] = 1;
    }
  }
  for (let key in hash) {
    if (hash[key] > nums.length / 3) {
      res.push(Number(key));
    }
  }
  return res;
}
