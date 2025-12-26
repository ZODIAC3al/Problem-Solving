/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const palindromeArr = [];
  const pattern = /^[a-z0-9]$/i;

  s.toLowerCase()
    .trim()
    .split("")
    .filter((e) => {
      if (e.match(pattern)) {
        palindromeArr.push(e);
      }
    });

  if (palindromeArr.join("") === palindromeArr.reverse().join("")) {
    return true;
  }

  return false;
};