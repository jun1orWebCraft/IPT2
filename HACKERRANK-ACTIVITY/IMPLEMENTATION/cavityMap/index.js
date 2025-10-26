function cavityMap(grid) {
    const n = grid.length;
    const result = [...grid];

    for (let i = 1; i < n - 1; i++) {
        let row = result[i].split('');

        for (let j = 1; j < n - 1; j++) {
            const cell = parseInt(grid[i][j]);
            const top = parseInt(grid[i - 1][j]);
            const bottom = parseInt(grid[i + 1][j]);
            const left = parseInt(grid[i][j - 1]);
            const right = parseInt(grid[i][j + 1]);

            if (cell > top && cell > bottom && cell > left && cell > right) {
                row[j] = 'X';
            }
        }

        result[i] = row.join('');
    }

    return result;
}
