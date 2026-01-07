/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const temp = [];
  for (let i = 0; i < arr.length; i += size) {
    temp.push(arr.slice(i, i + size));
  }
  return temp;
};