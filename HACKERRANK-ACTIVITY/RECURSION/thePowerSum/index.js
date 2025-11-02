function powerSum(X, N, num = 1) {
    const power = Math.pow(num, N);
    if (power > X) return 0;
    if (power === X) return 1;
    // include num + exclude num
    return powerSum(X - power, N, num + 1) + powerSum(X, N, num + 1);
}