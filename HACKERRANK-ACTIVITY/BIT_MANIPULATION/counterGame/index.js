function counterGame(n) {
    n = BigInt(n);
    
    const ones = (n - 1n).toString(2).split('1').length - 1;
    return ones % 2 === 1 ? "Louise" : "Richard";
}
