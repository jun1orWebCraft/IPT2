function twoPluses(grid) {
    const n = grid.length, m = grid[0].length;
    let maxProduct = 0;

    // Helper: Get all possible pluses with center (x, y)
    function getLengths(x, y) {
        let l = 0;
        while (
            x-l >= 0 && x+l < n &&
            y-l >= 0 && y+l < m &&
            grid[x-l][y] === 'G' &&
            grid[x+l][y] === 'G' &&
            grid[x][y-l] === 'G' &&
            grid[x][y+l] === 'G'
        )
            l++;
        return l-1; // Returns max arm length
    }

    // Store all possible pluses
    let pluses = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let maxLen = getLengths(i, j);
            for (let l = 0; l <= maxLen; l++) {
                pluses.push({i, j, l, area: 4*l+1, cells: getCells(i,j,l)});
            }
        }
    }

    // Find maximum area product without overlap
    for (let a = 0; a < pluses.length; a++) {
        for (let b = a+1; b < pluses.length; b++) {
            if (!intersect(pluses[a].cells, pluses[b].cells)) {
                let product = pluses[a].area * pluses[b].area;
                if (product > maxProduct) maxProduct = product;
            }
        }
    }
    return maxProduct;

    // Get array of occupied cells for overlap checking
    function getCells(x, y, l) {
        let set = [`${x},${y}`];
        for (let d = 1; d <= l; d++) {
            set.push(`${x-d},${y}`, `${x+d},${y}`, `${x},${y-d}`, `${x},${y+d}`);
        }
        return set;
    }
    // Check overlap based on occupied cell positions
    function intersect(a, b) {
        let setB = new Set(b);
        return a.some(cell => setB.has(cell));
    }
}
