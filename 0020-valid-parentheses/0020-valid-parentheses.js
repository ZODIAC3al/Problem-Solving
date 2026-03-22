/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     const stack = new Stack();

  for (let char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.isEmpty()) {
        return false;
      }

      const top = stack.pop();

      if (
        (char === ")" && top !== "(") ||
        (char === "]" && top !== "[") ||
        (char === "}" && top !== "{")
      ) {
        return false;
      }
    }
  }

  return stack.isEmpty();

};