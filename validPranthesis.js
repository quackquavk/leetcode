var isValid = function (s) {
  if (s.includes("()")) {
    s = s.replace("()", "");
    console.log(s)
  }
  if (s.includes("{}")) {
    s = s.replace("{}", "");
  }
  if (s.includes("[]")) {
    s = s.replace("[]", "");
  }
  return s.length === 0
};

const testCase = "()[]";

console.log(isValid(testCase));
