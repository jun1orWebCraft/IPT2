function missingNumbers(arr, brr) {
    const freqA = new Map();
    const freqB = new Map();

    // Count frequencies in arr
    for (let num of arr) {
        freqA.set(num, (freqA.get(num) || 0) + 1);
    }

    // Count frequencies in brr
    for (let num of brr) {
        freqB.set(num, (freqB.get(num) || 0) + 1);
    }

    const missing = [];

    // Compare frequencies
    for (let [num, count] of freqB.entries()) {
        if ((freqA.get(num) || 0) < count) {
            missing.push(num);
        }
    }

    return missing.sort((a, b) => a - b);
}
