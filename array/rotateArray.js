var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n;

  const rotate = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    rotate[(i + k) % n] = nums[i];
  }

  for (let i = 0; i < n; i++) {
    nums[i] = rotate[i];
  }
};
