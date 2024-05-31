/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  nums = nums.sort();
  let array =[]
 for(let i=0;i<nums.length;i++){
    if(nums.includes(nums[i],i+1)){
      i++
    }else{
            array.push(nums[i])
    }
 }return array
};

console.log(singleNumber([1,2,1,3,2,5]))
