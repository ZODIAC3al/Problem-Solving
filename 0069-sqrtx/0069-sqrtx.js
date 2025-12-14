/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if(x==0) return 0;
    var sqrtNum = Math.sqrt(x);
    var floorNum = Math.floor(sqrtNum);
    return floorNum;
};