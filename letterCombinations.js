var letterCombinations = function (digits) {
    let addedString ='';
  const data = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],["v", "t", "u"],
    ["w", "x", "y", "z"],
  ];
  digits.split("");
  for(let i=0;i<digits.length;i++){
     addedString = data[digits[i]-2][i] + data[digits[i]-2][i]
     console.log(data[digits[i]-2][i] + data[digits[i]-2][i])
  }
 return addedString

};
console.log(letterCombinations("23456789"));

