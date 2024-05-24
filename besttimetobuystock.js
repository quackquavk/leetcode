var maxProfit = function (prices) {
  let maxPrice = Math.max(...prices);
  const maxPriceIndex = prices.indexOf(maxPrice);
  if (maxPriceIndex === 0) return 0;
  prices.splice(maxPriceIndex + 1, prices.length - maxPriceIndex);
  let minPrice = Math.min(...prices);
  let profit = maxPrice - minPrice;
  return maxPrice - minPrice;
};

const prices = [1, 2, 3, 14, 5, 6, 7, 8, 9, 10];
console.log(maxProfit(prices));
