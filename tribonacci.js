/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n !== 0 && n < 3) return 1
    let fs = 0
    let ss = 1
    let ts = 1
    let res = 0
    for(i=3; i <= n ;i ++){
        res = fs + ss + ts
        fs = ss
        ss = ts
        ts = res
        console.log(`res:${res} fs:${fs} ss:${ss} ts:${ts}`)
    }
    return res
};
console.log(tribonacci(25))