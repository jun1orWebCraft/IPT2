function largestPermutation(k, arr) {
    const n = arr.length;
    // Map each value to its index for O(1) lookup
    const pos = {};
    for (let i = 0; i < n; i++) {
        pos[arr[i]] = i;
    }

    for (let i = 0; i < n && k > 0; i++) {
        // The value that should be at position i for largest permutation
        const desired = n - i;
        if (arr[i] === desired) continue; // Already in place

        // Swap current value with the position of the desired value
        const idxToSwap = pos[desired];
        // Update the position map before swapping
        pos[arr[i]] = idxToSwap;
        pos[desired] = i;

        // Swap in the array
        [arr[i], arr[idxToSwap]] = [arr[idxToSwap], arr[i]];
        k--;
    }
    return arr;
}