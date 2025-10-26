function organizingContainers(container) {
    const n = container.length;
    const rowSums = Array(n).fill(0);
    const colSums = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rowSums[i] += container[i][j];
            colSums[j] += container[i][j];
        }
    }
    rowSums.sort((a, b) => a - b);
    colSums.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        if (rowSums[i] !== colSums[i]) {
            return "Impossible";
        }
    }
    return "Possible";
}
