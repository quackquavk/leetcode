/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  word = word.split("");
  let index;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      index = i;
      break;
    }
  }
  let halfWord = word.splice(0, index + 1);
  halfWord = halfWord.reverse();
  word.unshift(...halfWord);
  return word.join("");
};

console.log(reversePrefix("abcd", "b"));
