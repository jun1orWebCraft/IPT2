function superDigit(n, k) {
    // compute sum of digits of n as BigInt
    let sum = 0n;
    for (const ch of n) sum += BigInt(ch);
    // multiply by k (BigInt)
    let total = sum * BigInt(k);

    // repeatedly sum digits until single digit
    while (total >= 10n) {
        let s = 0n;
        for (const ch of total.toString()) s += BigInt(ch);
        total = s;
    }
    return Number(total); // convert final single digit to Number
}
