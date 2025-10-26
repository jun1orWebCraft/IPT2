function funnyString(s) {
    const n = s.length;
    for (let i = 1; i < n; i++) {
        const diff1 = Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
        const diff2 = Math.abs(s.charCodeAt(n - i) - s.charCodeAt(n - i - 1));
        if (diff1 !== diff2) {
            return "Not Funny";

        }
    }
    return "Funny";
}