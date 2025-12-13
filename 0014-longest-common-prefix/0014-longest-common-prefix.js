/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  if (strs.length < 2) return strs.join("");

  // 🔴 handle ["", ""]
  if (strs[0] === "") return "";

  var common = strs[0].split("");
  var commonWord = [];

  for (let i = 0; i < common.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i]?.toLowerCase() !== common[i].toLowerCase()) {
        return commonWord.join("");
      }
    }
    commonWord.push(common[i]);
  }

  return commonWord.join("");
};
