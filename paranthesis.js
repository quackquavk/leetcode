var checkValidString = function(s) {
    let minLeftParenCount = 0;
    let maxLeftParenCount = 0;
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") {
        minLeftParenCount++;
        maxLeftParenCount++;
      } else if (s[i] === ")") {
        minLeftParenCount = Math.max(minLeftParenCount - 1, 0);
        maxLeftParenCount--;
      } else { // When s[i] === "*"
        minLeftParenCount = Math.max(minLeftParenCount - 1, 0);
        maxLeftParenCount++;
      }
      console.log(minLeftParenCount,maxLeftParenCount)
  
      // If the minimum number of open parentheses becomes negative,
      // there's no way to balance the string, so return false
      if (maxLeftParenCount < 0) {
        return false;
      }
    }
  
    // If all left parentheses can be balanced with asterisks,
    // return true
    return minLeftParenCount === 0;
  };
  
  console.log(checkValidString("(((((((((((((((**********(*)))**")); // Output: true
  