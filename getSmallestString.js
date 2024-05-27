var getSmallestString = function(n, k) {
    if (k < n || k > 9 * n) {
        return -1; 
    }

    let result = new Array(n).fill(0);  

    for (let i = n - 1; i >= 0; i--) {
        if (k > 9) {
            result[i] = 9;
            k -= 9;
        } else {
            result[i] = k;
            k = 0;
        }
    }

    return parseInt(result.join(''), 10);
};
let n = 3;
let k = 27;
console.log(getSmallestString(n,k))