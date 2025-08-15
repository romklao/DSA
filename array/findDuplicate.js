const findDuplicate = (nums) => {
  let hash = {};

  for (let num of nums) {
    if (hash[num] !== undefined) {
      return num;
    } else {
      hash[num] = 1;
    }
  }
  return -1;
};
