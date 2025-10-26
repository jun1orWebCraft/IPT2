function theLoveLetterMystery(s) {
    let count = 0;
    let n = s.length;

    for (let i = n - 1; i >= Math.floor(n / 2); i--) {
        count += Math.abs(s.charCodeAt(i) - s.charCodeAt(n - 1 - i));
    }

    return count;
}
