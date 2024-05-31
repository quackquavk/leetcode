/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let num = BigInt('0b' + s);  // Convert binary string to BigInt
    let steps = 0;
  
    while (num > 1n) {
      if (num % 2n === 0n) {
        num /= 2n;  // If the number is even, divide by 2
      } else {
        num += 1n;  // If the number is odd, add 1
      }
      steps++;
    }
  
    return steps;
  };
  
  // Example usage
  let binaryString = '1111011110000011100000110001011011110010111001010111110001';
  console.log(numSteps(binaryString));  // Output should be 85
  