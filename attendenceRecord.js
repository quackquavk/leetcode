/**
 * @param {number} n
 * @return {number}
 */
// const checkRecord = function(n) {
//     let P = 1
//     let L1 = 1
//     let L2 = 0
//     let A = 1
//     let pureP = 1
//     let pureL1 = 1
//     let pureL2 = 0
//     const mod = 10 ** 9 + 7
  
//     for (let i = 2; i < n + 1; i++) {
//       const newP = (P + L1 + L2 + A) % mod
//       const newL1 = (P + A) % mod
//       const newL2 = L1
//       const newA = (pureP + pureL1 + pureL2) % mod
//       P = newP
//       L1 = newL1
//       L2 = newL2
//       A = newA
//       const newPureP = (pureP + pureL1 + pureL2) % mod
//       const newPureL1 = pureP
//       const newPureL2 = pureL1
//       pureP = newPureP
//       pureL1 = newPureL1
//       pureL2 = newPureL2
//     }
//     return (P + L1 + L2 + A) % (10 ** 9 + 7)
//   }
var checkRecord = function(n) {
    let count = 0;
    const memo = new Array(n).fill().map(() => new Array(2).fill().map(() => new Array(3).fill(null)));
    
    const generateRecord = (idx = 0, remainsA = 1, remainsL = 2) => {
        let count = 0;
        if (idx === n) {
            return 1;
        }

        if (memo[idx][remainsA][remainsL] !== null) {
            return memo[idx][remainsA][remainsL];
        }

        if (remainsA) {
            count += generateRecord(idx + 1, remainsA - 1, 2);
        }

        if (remainsL) {
            count += generateRecord(idx + 1, remainsA, remainsL - 1);
        }

        count += generateRecord(idx + 1, remainsA, 2);
        console.log(memo)

        return memo[idx][remainsA][remainsL] = count % 1000000007;
    }

    return generateRecord();

    // return count;
};

  console.log(checkRecord(5))