/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let start = 0;
    let maxLength = 0;
    let currentCost = 0;

    for (let end = 0; end < s.length; end++) {
        currentCost += Math.abs(s.charCodeAt(end) - t.charCodeAt(end));

        while (currentCost > maxCost) {
            currentCost -= Math.abs(s.charCodeAt(start) - t.charCodeAt(start));
            start++;
        }

        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};

let s = "pxezla";
let t = "loewbi";
let maxCost = 25;

console.log(equalSubstring(s, t, maxCost)); // Output: 4
