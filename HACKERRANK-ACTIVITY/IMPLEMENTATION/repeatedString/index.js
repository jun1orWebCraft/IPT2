function repeatedString(s, n) {
    const countA = (str) => [...str].filter(char => char === 'a').length;

    const fullRepeats = Math.floor(n / s.length);
    const remainder = n % s.length;

    return countA(s) * fullRepeats + countA(s.slice(0, remainder));
}
