/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for (let e of tokens) {  
        if (!isNaN(e)) {      
            stack.push(parseInt(e));
        } else {
            let b = stack.pop();
            let a = stack.pop();
            let c = 0;

            if (e === '+') {
                c = a + b;
            } else if (e === '-') {
                c = a - b;
            } else if (e === '*') {
                c = a * b;
            } else {
                c = Math.trunc(a / b);
            }

            stack.push(c);
        }
    }

    return stack.pop();
};