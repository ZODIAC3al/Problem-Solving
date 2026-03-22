/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length === 0) {
    return [];
  } else {
    const arr = nums.sort((a, b) => a - b);
    return arr;
  }
};