function chocolateFeast(n, c, m) {
    let chocolates = Math.floor(n / c);
    let wrappers = chocolates;

    while (wrappers >= m) {
        let free = Math.floor(wrappers / m);
        chocolates += free;
        wrappers = wrappers - free * m + free;
    }

    return chocolates;
}
