function andProduct(a, b) {
    a = BigInt(a);
    b = BigInt(b);
    let shift = 0n;

    // Keep shifting until both are equal
    while (a !== b) {
        a >>= 1n;
        b >>= 1n;
        shift++;
    }

    // Shift back to restore original bit length
    return a << shift;
}