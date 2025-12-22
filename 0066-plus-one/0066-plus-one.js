/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits.length === 0) {
    return [1];
  }

  const bigNumber = BigInt(digits.join("")) + 1n;

  return bigNumber
    .toString()
    .split("")
    .map((d) => Number(d));
};