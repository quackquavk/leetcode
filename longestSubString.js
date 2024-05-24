var lengthOfLongestSubstring = function (s) {
    let word = '';
    for (let i = 0; i < s.length; i++) {
      if (s.includes(s[i],i+1)) {
        word = s[i]
        console.log(s[i],i+1)
        if(s.includes(word+s[i+1]),i+2){
            word = word + s[i+1]
        }
      }
    }return word
};

console.log(lengthOfLongestSubstring('abcabcbb'))