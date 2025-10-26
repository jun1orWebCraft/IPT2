function pairs(k, arr) {
    const numSet = new Set(arr);
    let count = 0;

    for (const num of arr) {
        if (numSet.has(num + k)) {
            count++;
        }
    }

    return count;
}
