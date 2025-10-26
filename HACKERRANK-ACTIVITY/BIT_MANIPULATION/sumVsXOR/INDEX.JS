function sumXor(n) {
    if (n === 0) return 1;

    let count = 0;
    while (n > 0) {
        if (n % 2 === 0) count++;
        n = Math.floor(n / 2);
    }

    return Math.pow(2, count);
}
