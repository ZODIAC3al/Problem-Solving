/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDuplicates(nums) {
  let seen = {};
  let duplicates = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (seen[num]) {
      if (!duplicates.includes(num)) {
        duplicates.push(num);
      }
    } else {
      seen[num] = true;
    }
  }
  return duplicates;
}
