/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMaxK = function(nums) {
//    let positiveHalf =[];
//    let negativeHalf =[];
//    let array = [];
//    for(let i=0;i<nums.length;i++){
//     if(nums[i]<0){
//         negativeHalf.push(nums[i])
//     }else{
//         positiveHalf.push(nums[i])
//     }
//    } 
//    for(let i=0;i<positiveHalf.length;i++){
//     for (let j = 0; j < negativeHalf.length; j++) {
//             if(positiveHalf[i] === -negativeHalf[j]){
//                 array.push(positiveHalf[i])
//             }else{
//                 continue
//             }
//     }
//    }if(array.length > 0){
//     return Math.max(...array)
//    }else{
//     return -1
//    }
// }


var findMaxK = function(nums){
    let array=[]
    for (let i = 0; i < nums.length; i++) {
                if(nums[i] > 0 && nums.includes(-nums[i])){
                    array.push(nums[i])
                }else{
                    continue
                }
    }return array.length > 0? Math.max(...array): -1
}

console.log(findMaxK([-10,8,6,7,-2,-3]))

