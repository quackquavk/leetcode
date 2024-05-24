var longestIdealString = function (s, k) {
  const n = s.length;
  const dp = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (Math.abs(s.charCodeAt(i) - s.charCodeAt(j)) <= k) {
        console.log(s.charCodeAt(i),s.charCodeAt(j))
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};
a='abc'
console.log(longestIdealString("acfgbd", 5) ,a.charCodeAt(2) );
