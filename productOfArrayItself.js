// var productOfArrayItself = function(nums) {
//   let totalProduct = 1;
//   let zeroCount = 0;

//   for (let num of nums) {
//       if (num !== 0) {
//           totalProduct *= num;
//       } else {
//           zeroCount++;
//       }
//   }

//   let products = [];

//   if (zeroCount > 1) {
//       products = Array(nums.length).fill(0);
//   } else if (zeroCount === 1) {
//       for (let num of nums) {
//           if (num === 0) {
//               products.push(totalProduct);
//           } else {
//               products.push(0);
//           }
//       }
//   } else {
//       for (let num of nums) {
//           products.push(totalProduct !== 0 ? totalProduct / num : 0);
//       }
//   }

//   return products;
// };

var productOfArrayItself = function (nums) {
  let products = [];
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      while(i!==j){
        product *= nums[i];
      }
     
    } products.push(product);
  }return products
}
console.log(productOfArrayItself([1,2,3,4,5]))
