/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    if(n==1) return 1;
    if(n==2) return 2;
    var first =1;
    var second =2;
    var ways =0;
    for(let i=3 ; i<=n ; i++){
        ways = first + second ;
        first = second ;
        second = ways ;
    }
    return ways ;
};