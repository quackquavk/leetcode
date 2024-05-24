/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    const n = nums.length;
    let totalXOR = 0;

    // There are 2^n subsets, iterate over each subset
    for (let i = 0; i < (1 << n); i++) {
        let subsetXOR = 0;

        // Generate the subset based on the current value of i
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                subsetXOR ^= nums[j];
            }
        }

        // Add the XOR total of the current subset to the overall sum
        totalXOR += subsetXOR;
    }

    return totalXOR;
 
};
console.log(subsetXORSum([1, 3]));
console.log(10000)