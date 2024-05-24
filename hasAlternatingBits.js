const hasAlternatingBits = n => !((n ^= n / 4) & n + 1);

console.log(hasAlternatingBits(11));
