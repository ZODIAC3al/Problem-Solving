/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const filteredArr = arr.filter((e, i) => fn(e, i));
  return filteredArr;
};