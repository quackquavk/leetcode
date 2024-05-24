function removeKdigits(num, k) {
    const stack = [];
    
    for (const digit of num) {
        while (k > 0 && stack.length && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
        console.log(stack[stack.length-1])
    }
    
    // If k is still greater than 0, remove the remaining largest digits from the end
    while (k > 0) {
        stack.pop();
        k--;
    }
    
    // Remove leading zeros
    while (stack.length && stack[0] === '0') {
        stack.shift();
    }
    
    // Return the result as a string
    return stack.length ? stack.join('') : '0';
}

// Test cases
console.log(removeKdigits("1432219", 3)); // Output: "1219"
console.log(removeKdigits("10200", 1));   // Output: "200"
console.log(removeKdigits("10", 2));      // Output: "0"
