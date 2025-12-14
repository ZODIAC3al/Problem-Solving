/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if(s.trim() == "") return 0;
   return s.trim().split(" ").reverse()[0].length;

};