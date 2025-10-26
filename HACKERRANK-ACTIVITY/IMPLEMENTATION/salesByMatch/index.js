function sockMerchant(n, ar) {
    let colorCount = {};
    let pairs = 0;
    for (let color of ar) {
        colorCount[color] = (colorCount[color] || 0) + 1;
        if (colorCount[color] % 2 === 0) {
            pairs++;
        }
    }
    return pairs;
}