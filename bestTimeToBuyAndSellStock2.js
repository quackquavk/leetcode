var maxProfit = function (prices) {
  let newArray = [];
  let newPrices = prices;
  for (let i = 0; i < prices.length; i++) {

    console.log(i)
    newPrices = newPrices.splice(i,1)
  }
  return newPrices;
};

console.log(maxProfit([1, 2, 3]));
