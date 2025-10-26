function twoStrings(s1, s2) {
    const set1 = new Set(s1);

    for (let char of s2) {
        if (set1.has(char)) {
            return "YES";
        }
    }

    return "NO";
}
