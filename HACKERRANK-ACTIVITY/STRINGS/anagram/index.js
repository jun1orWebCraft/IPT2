function anagram(s) {
    if (s.length % 2 !== 0) return -1;

    const mid = s.length / 2;
    const s1 = s.slice(0, mid);
    const s2 = s.slice(mid);
    const freq = {};

    for (let char of s1) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let char of s2) {
        if (freq[char]) {
            freq[char]--;
        }
    }

    let changes = 0;
    for (let key in freq) {
        changes += freq[key];
    }

    return changes;
}
