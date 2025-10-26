function equal(arr) {
    const min = Math.min(...arr);
    let minOps = Infinity;

    for (let base = 0; base <= 4; base++) {
        let ops = 0;
        for (const val of arr) {
            let diff = val - (min - base);
            ops += Math.floor(diff / 5);
            diff %= 5;
            ops += Math.floor(diff / 2);
            diff %= 2;
            ops += diff;
        }
        minOps = Math.min(minOps, ops);
    }

    return minOps;
}
