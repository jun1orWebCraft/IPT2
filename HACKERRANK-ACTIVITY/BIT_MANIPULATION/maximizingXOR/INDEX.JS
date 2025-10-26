function maximizingXor(l, r) {
    let xor = l ^ r;
    let msb = 0;

    while (xor > 0) {
        msb++;
        xor >>= 1;
    }

    return (1 << msb) - 1;
}
