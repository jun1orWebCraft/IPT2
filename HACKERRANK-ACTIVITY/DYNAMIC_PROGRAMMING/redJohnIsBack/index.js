function redJohnAllQueries(ns) {
    const maxN = Math.max(...ns);

    const ways = new Array(maxN + 1).fill(0);
    ways[0] = 1;
    for (let i = 1; i <= maxN; i++) {
        ways[i] = ways[i - 1];
        if (i >= 4) ways[i] += ways[i - 4];
    }

    const maxWays = ways[maxN];

    const isPrime = new Array(maxWays + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for (let i = 2; i * i <= maxWays; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= maxWays; j += i) {
                isPrime[j] = false;
            }
        }
    }

    const primeCountPrefix = new Array(maxWays + 1).fill(0);
    for (let i = 1; i <= maxWays; i++) {
        primeCountPrefix[i] = primeCountPrefix[i - 1] + (isPrime[i] ? 1 : 0);
    }

    return ns.map(n => primeCountPrefix[ways[n]]);
}

