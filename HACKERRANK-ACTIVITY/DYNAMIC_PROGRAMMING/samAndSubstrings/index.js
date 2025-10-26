function substrings(n) {
    const MOD = 1e9 + 7;
    let total = 0;
    let multiplier = 1;
    let prev = 0;

    for (let i = n.length - 1; i >= 0; i--) {
        const digit = Number(n[i]);
        prev = (digit * multiplier + prev) % MOD;
        total = (total + prev) % MOD;
        multiplier = (multiplier * 10 + 1) % MOD;
    }

    return total;
}
