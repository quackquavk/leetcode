const minSubarrayLength = (nums, target) => {
    let minLength = Infinity;
    let left = 0;
    let sum = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        console.log(`sum1=${sum}`)
        
        // Shrink the window as long as the sum is greater than or equal to target
        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            console.log(`minlength=${Math.min(minLength, right - left + 1)}`)
            left++;
            console.log(`sum2=${sum}`)
            console.log(`right=${right},left=${left}`)
        }
    }

    // If minLength is still Infinity, no subarray with sum equal to target was found
    return minLength === Infinity ? -1 : minLength;
};
console.log(minSubarrayLength([1,2,3], 5)); // Output: 2
// console.log(minSubarrayLength([1,1,1,2,3], 4)); // Output: 2
// console.log(minSubarrayLength([2,4,6,8], 3)); // Output: -1