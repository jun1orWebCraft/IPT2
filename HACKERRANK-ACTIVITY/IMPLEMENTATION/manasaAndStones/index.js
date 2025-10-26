function stones(n, a, b) {
    const results = new Set();

    for (let i = 0; i < n; i++) {
        const value = i * b + (n - 1 - i) * a;
        results.add(value);
    }

    return Array.from(results).sort((x, y) => x - y);
}
