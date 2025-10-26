function lonelyinteger(a) {
    const freq = {};

    for (let num of a) {
        freq[num] = (freq[num] || 0) + 1;
    }

    for (let num in freq) {
        if (freq[num] === 1) {
            return parseInt(num);
        }
    }
}
