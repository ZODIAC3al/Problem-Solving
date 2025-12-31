/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
    
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
 var inorderTraversal = function* (arr) {
  const flatArr = arr.flat(Infinity);
  let i = 0;

  while (i < flatArr.length) {
    yield flatArr[i];
    i++;
  }
};