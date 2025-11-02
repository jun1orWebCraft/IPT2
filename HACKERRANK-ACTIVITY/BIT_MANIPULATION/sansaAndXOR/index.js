function sansaXor(arr) {
    // If array length is even, result is always 0
    if (arr.length % 2 === 0) return 0;

    // For odd-length arrays, XOR elements at even indices
    let result = 0;
    for (let i = 0; i < arr.length; i += 2) {
        result ^= arr[i];
    }
    return result;
}
