/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const y = x.toString().split("").reverse().join('');
x=x.toString().split('').join('')
console.log(x,y)
  return x === y;
};
console.log(isPalindrome(121))