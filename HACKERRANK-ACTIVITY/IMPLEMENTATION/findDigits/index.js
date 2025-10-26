function findDigits(n) {
    let count = 0;
    let digits = n.toString().split('');

    for (let digit of digits) {
        let d = parseInt(digit);
        if (d !== 0 && n % d === 0) {
            count++;
        }
    }

    return count;
}
