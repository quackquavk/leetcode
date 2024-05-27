/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    const charCount = new Map();

    for (const word of words) {
        for (const char of word) {
            charCount.set(char, (charCount.get(char) || 0) + 1);
            console.log(charCount)
        }
    }

    return [...charCount.values()].every(count => count % words.length === 0);
};

const words = ["abc","aabc","bc"]
console.log(makeEqual(words))