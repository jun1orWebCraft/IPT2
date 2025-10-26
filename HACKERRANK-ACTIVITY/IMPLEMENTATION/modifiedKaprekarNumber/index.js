function kaprekarNumbers(p, q) {
    const result = [];
    for (let n = p; n <= q; n++) {
        const d = n.toString().length;
        const nSquared = (n * n).toString();
        const rightPart = nSquared.slice(-d);
        const leftPart = nSquared.slice(0, nSquared.length - d) || '0';

        if (parseInt(leftPart) + parseInt(rightPart) === n) {
            result.push(n);
        }
    }

    console.log(result.length ? result.join(' ') : 'INVALID RANGE');
}
