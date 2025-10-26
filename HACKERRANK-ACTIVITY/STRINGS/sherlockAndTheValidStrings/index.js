function isValid(s) {
    const freq = {};

    // Count frequency of each character
    for (const char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Count how many times each frequency occurs
    const freqCount = {};
    for (const val of Object.values(freq)) {
        freqCount[val] = (freqCount[val] || 0) + 1;
    }

    const keys = Object.keys(freqCount).map(Number);

    // Case 1: All characters have the same frequency
    if (keys.length === 1) return "YES";

    // Case 2: Two different frequencies
    if (keys.length === 2) {
        const [f1, f2] = keys;
        const [c1, c2] = [freqCount[f1], freqCount[f2]];

        // One character occurs once OR one character occurs once more than the rest
        if ((f1 === 1 && c1 === 1) || (f2 === 1 && c2 === 1)) return "YES";
        if ((Math.abs(f1 - f2) === 1) && (c1 === 1 || c2 === 1)) return "YES";
    }

    return "NO";
}
