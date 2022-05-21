// Running sum of 1 D array (level 1)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let lastSum = 0;
  return nums.map((x) => (lastSum += x));
};

// Find pivot index

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  //loop array
  //slice left and reduce
  //slice right and reduce
  //check if both are equal return index
  //if not return -1
  for (let i = 0; i < nums.length; i++) {
    let left = nums.slice(0, i).reduce((a, c) => a + c, 0);
    let right = nums.slice(i + 1, nums.length).reduce((a, c) => a + c, 0);
    if (left === right) {
      return i;
    }
  }
  return -1;
};
