function absolutePermutation(n, k) {
    if (k === 0) {
        // When k is 0, return the natural numbers in order
        return Array.from({length: n}, (_, i) => i + 1);
    }
    if (n % (2 * k) !== 0) {
        // It's impossible to create a permutation when n is not divisible by 2k
        return [-1];
    }
    let res = [];
    let add = true;
    for (let i = 1; i <= n; i++) {
        if (add)
            res.push(i + k);
        else
            res.push(i - k);
        if (i % k === 0) add = !add;
    }
    return res;
}
