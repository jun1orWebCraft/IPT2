function misereNim(s) {
    const allOnes = s.every(x => x === 1);

    if (allOnes) {
        return s.length % 2 === 1 ? "Second" : "First";
    } else {
        let balance = 0;
        for (let val of s) {
            balance ^= val;
        }
        return balance === 0 ? "Second" : "First";
    }
}