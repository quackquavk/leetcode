/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  score.sort((a, b) => a - b);
  console.log(score)
  let positions = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  for (let i = 0; i < 3; i++) {
    score.splice(i, 1, positions[0]);
    positions.splice(0, 1);
  }
  
let newArray = score.map(item => {
  if (typeof item === 'number') {
      return item.toString();
  }
  return item;
});

  return newArray
};

console.log(findRelativeRanks([1,2,3,4,56,7]))
