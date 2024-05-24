var isPalindrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let reversed = s.split("").reverse().join("");

  return s === reversed;
};
let testCase = "A man, a plan, a canal: Panama";
console.log(isPalindrome(testCase));
