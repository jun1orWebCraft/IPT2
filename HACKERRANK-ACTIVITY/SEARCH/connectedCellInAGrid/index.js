function connectedCell(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let maxRegion = 0;

    // Helper to explore connected region using DFS
    function dfs(r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || matrix[r][c] === 0) {
            return 0;
        }

        matrix[r][c] = 0; // Mark cell as visited
        let size = 1;

        // Explore all 8 directions
        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                if (dr !== 0 || dc !== 0) {
                    size += dfs(r + dr, c + dc);
                }
            }
        }

        return size;
    }

    // Traverse the grid and find largest region
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] === 1) {
                const regionSize = dfs(r, c);
                maxRegion = Math.max(maxRegion, regionSize);
            }
        }
    }

    return maxRegion;
}
