function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  const memo = new Map();
  function backtrack(start) {
    if (memo.has(start)) {
      return memo.get(start);
    }
    if (start === s.length) {
      return [""];
    }

    const sentences = [];
    for (let end = start + 1; end <= s.length; end++) {
      const word = s.slice(start, end);
      console.log(word);
      if (wordSet.has(word)) {
        const restOfSentences = backtrack(end);
        for (const sentence of restOfSentences) {
          sentences.push(sentence ? word + " " + sentence : word);
        }
      }
    }
    memo.set(start, sentences);
    return sentences;
  }

  return backtrack(0);
}

// Example 1
const s1 = "catsanddog";    
const wordDict1 = ["cat", "cats", "and", "sand", "dog"];
console.log(wordBreak(s1, wordDict1)); // Output: ["cats and dog", "cat sand dog"]

// // Example 2
// const s2 = "pineapplepenapple";
// const wordDict2 = ["apple", "pen", "applepen", "pine", "pineapple"];
// console.log(wordBreak(s2, wordDict2));  // Output: ["pine apple pen apple", "pineapple pen apple", "pine applepen apple"]

// // Example 3
// const s3 = "catsandog";
// const wordDict3 = ["cats", "dog", "sand", "and", "cat"];
// console.log(wordBreak(s3, wordDict3));  // Output: []>
