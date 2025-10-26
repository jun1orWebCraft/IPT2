function lilysHomework(arr) {
    // Helper to count swaps needed to sort array
    function countSwaps(original, sorted) {
        const indexMap = new Map();
        for (let i = 0; i < original.length; i++) {
            indexMap.set(original[i], i);
        }

        let swaps = 0;
        const visited = new Array(original.length).fill(false);

        for (let i = 0; i < original.length; i++) {
            if (visited[i] || sorted[i] === original[i]) continue;

            let cycleSize = 0;
            let j = i;

            while (!visited[j]) {
                visited[j] = true;
                j = indexMap.get(sorted[j]);
                cycleSize++;
            }

            if (cycleSize > 0) {
                swaps += cycleSize - 1;
            }
        }

        return swaps;
    }

    const ascSorted = [...arr].sort((a, b) => a - b);
    const descSorted = [...arr].sort((a, b) => b - a);

    return Math.min(countSwaps(arr, ascSorted), countSwaps(arr, descSorted));
}
