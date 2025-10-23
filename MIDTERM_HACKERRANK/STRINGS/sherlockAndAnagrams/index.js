function sherlockAndAnagrams(s) {
    let count = 0;
    const substrFreq = {};

    // Generate all possible substrings
    for (let start = 0; start < s.length; start++) {
        for (let end = start + 1; end <= s.length; end++) {
            // Extract substring and sort its characters
            const substr = s.slice(start, end).split('').sort().join('');

            // Count frequency of each sorted substring
            substrFreq[substr] = (substrFreq[substr] || 0) + 1;
        }
    }

    // Count anagrammatic pairs using combination formula: nC2 = n*(n-1)/2
    for (const key in substrFreq) {
        const freq = substrFreq[key];
        if (freq > 1) {
            count += (freq * (freq - 1)) / 2;
        }
    }

    return count;
}
