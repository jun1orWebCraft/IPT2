function makingAnagrams(s1, s2) {
    const freq = new Array(26).fill(0); // Array to track letter counts

    for (let char of s1) {
        freq[char.charCodeAt(0) - 97]++; // Count letters in s1
    }

    for (let char of s2) {
        freq[char.charCodeAt(0) - 97]--; // Subtract letters in s2
    }

    let deletions = 0;
    for (let count of freq) {
        deletions += Math.abs(count); // Sum up differences
    }

    return deletions;
}
