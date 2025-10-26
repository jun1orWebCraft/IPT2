function pickingNumbers(a) {
    // Count the frequency of each number
    let freq = Array(101).fill(0);
    for (let num of a) {
        freq[num]++;
    }
    let maxLen = 0;
    // For each possible number, check the sum of its frequency and its neighbor
    for (let i = 1; i < freq.length; i++) {
        maxLen = Math.max(maxLen, freq[i] + freq[i - 1]);
    }
    return maxLen;
}