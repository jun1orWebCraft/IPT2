function twoArrays(k, A, B) {
    A.sort((a, b) => a - b);       // Sort A ascending
    B.sort((a, b) => b - a);       // Sort B descending

    for (let i = 0; i < A.length; i++) {
        if (A[i] + B[i] < k) {
            return "NO";
        }
    }

    return "YES";
}
