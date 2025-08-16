var majorityElement = function (nums) {
  let hash = {};

  for (let num of nums) {
    if (hash[num] !== undefined) {
      hash[num] += 1;
    } else {
      hash[num] = 1;
    }
  }

  for (let key in hash) {
    if (hash[key] > nums.length / 2) {
      return Number(key);
    }
  }
  return -1;
};

var majorityElement = function (nums) {
  let candidate = 0;
  let votes = 0;

  for (let num of nums) {
    if (votes === 0) {
      candidate = num;
      votes = 1;
    } else {
      if (candidate === num) {
        votes += 1;
      } else {
        votes -= 1;
      }
    }
  }
  let count = 0;
  for (let num of nums) {
    if (num === candidate) {
      count += 1;
    }
  }
  if (count > nums.length / 2) {
    return candidate;
  }
  return -1;
};
