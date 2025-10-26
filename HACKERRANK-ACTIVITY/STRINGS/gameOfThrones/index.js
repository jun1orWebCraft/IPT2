function gameOfThrones(s) {
    const freq = {};

    // Count frequency of each character
    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    let oddCount = 0;

    // Count how many characters have odd frequency
    for (let key in freq) {
        if (freq[key] % 2 !== 0) {
            oddCount++;
        }
    }

    // If more than one odd count, it's not a palindrome
    return oddCount > 1 ? "NO" : "YES";
}
