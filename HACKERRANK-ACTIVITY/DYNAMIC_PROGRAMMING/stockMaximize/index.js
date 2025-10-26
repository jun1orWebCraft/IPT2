function stockmax(prices) {
    let profit = 0;
    let maxFuturePrice = 0;

    for (let i = prices.length - 1; i >= 0; i--) {
        maxFuturePrice = Math.max(maxFuturePrice, prices[i]);
        profit += maxFuturePrice - prices[i];
    }

    return profit;
}
