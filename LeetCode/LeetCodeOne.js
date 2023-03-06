// Running sum of 1 D array (level 1)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let lastSum = 0;
  return nums.map((x) => (lastSum += x));
};
