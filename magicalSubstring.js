var wonderfulSubstrings = function (word) {
  let count = new Array(1024).fill(0); // Initialize an array to store counts for each bitmask
  count[0] = 1; // Empty string has all characters appearing even number of times
  let result = 0;
  let mask = 0;

  for (let char of word) {
    let index = char.charCodeAt(0) - 97; // Calculate the index of the character
    mask ^= 1 << index; // Toggle the bit corresponding to the current character
    result += count[mask]; // Add count of substrings that make the current substring wonderful
    for (let i = 0; i < 10; i++) {
      result += count[mask ^ (1 << i)]; // Add count of substrings that make the current substring wonderful by toggling one character
    }
    count[mask]++;
  }

  return result;
};

console.log(wonderfulSubstrings("ababbcaaad"));
