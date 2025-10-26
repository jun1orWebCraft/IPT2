function nonDivisibleSubset(k, S) {
    const remainders = Array(k).fill(0);
    for (const num of S) {
        remainders[num % k]++;
    }
    let count = Math.min(remainders[0], 1);
    for (let i = 1; i <= Math.floor(k / 2); i++) {
        if (i === k - i) {
            count += Math.min(remainders[i], 1);
        } else {
            count += Math.max(remainders[i], remainders[k - i]);
        }
    }
    return count;
}