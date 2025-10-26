function minimumLoss(price) {
    const indexedPrices = price.map((p, i) => ({ price: p, year: i }));
    indexedPrices.sort((a, b) => a.price - b.price);

    let minLoss = Infinity;

    for (let i = 1; i < indexedPrices.length; i++) {
        const higher = indexedPrices[i];
        const lower = indexedPrices[i - 1];

        // Only consider if the higher price occurred earlier (buy before sell)
        if (higher.year < lower.year) {
            const loss = higher.price - lower.price;
            if (loss < minLoss) {
                minLoss = loss;
            }
        }
    }

    return minLoss;
}
