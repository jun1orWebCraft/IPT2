function palindromeIndex(s) {
    const isPalindrome = (str, start, end) => {
        while (start < end) {
            if (str[start] !== str[end]) return false;
            start++;
            end--;
        }
        return true;
    };

    let n = s.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        let j = n - 1 - i;
        if (s[i] !== s[j]) {
            if (isPalindrome(s, i + 1, j)) return i;
            if (isPalindrome(s, i, j - 1)) return j;
            return -1;
        }
    }

    return -1;
}
