function permutationGame(arr) {
    const memo = new Map();

    function isIncreasing(a) {
        for (let i = 1; i < a.length; i++) {
            if (a[i] <= a[i - 1]) return false;
        }
        return true;
    }

    function grundy(a) {
        const key = a.join(',');
        if (memo.has(key)) return memo.get(key);
        if (isIncreasing(a)) return 0;

        const seen = new Set();
        for (let i = 0; i < a.length; i++) {
            const next = a.slice(0, i).concat(a.slice(i + 1));
            seen.add(grundy(next));
        }

        // Find the minimum excludant (mex)
        let g = 0;
        while (seen.has(g)) g++;
        memo.set(key, g);
        return g;
    }

    return grundy(arr) === 0 ? "Bob" : "Alice";
}
