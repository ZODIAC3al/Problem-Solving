/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  var counter = n;
  var arr = [];

  return function () {
    if (arr.length == 0) {
      arr.push(counter);
    } else {
      counter++;
    }

    return counter;
  };
};

  const counter = createCounter(10)
  counter() // 10
  counter() // 11
  counter() // 12
 