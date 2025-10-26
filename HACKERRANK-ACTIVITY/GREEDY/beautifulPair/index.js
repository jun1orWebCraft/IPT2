function beautifulPairs(A, B) {
    // Count frequency of each number in A and B
    const freqA = {};
    const freqB = {};
    for (let num of A) freqA[num] = (freqA[num] || 0) + 1;
    for (let num of B) freqB[num] = (freqB[num] || 0) + 1;

    // Count initial beautiful pairs (pairwise disjoint)
    let pairs = 0;
    for (let num in freqA) {
        if (freqB[num]) {
            pairs += Math.min(freqA[num], freqB[num]);
        }
    }

    if (pairs === A.length) {
        return pairs - 1;
    } else {
        return pairs + 1;
    }
}