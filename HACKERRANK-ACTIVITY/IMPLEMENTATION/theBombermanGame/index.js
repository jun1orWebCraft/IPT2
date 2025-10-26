function bomberMan(n, grid) {
    if (n === 1) return grid;
    if (n % 2 === 0) {
        // Fill the grid with bombs for every cell
        return grid.map(row => 'O'.repeat(row.length));
    }
    // Function to simulate bomb explosions
    function explode(g) {
        const r = g.length, c = g[0].length;
        // Start with a grid full of bombs
        let newGrid = Array.from({length: r}, () => Array(c).fill('O'));
        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (g[i][j] === 'O') {
                    newGrid[i][j] = '.';
                    if (i > 0) newGrid[i-1][j] = '.';
                    if (i < r-1) newGrid[i+1][j] = '.';
                    if (j > 0) newGrid[i][j-1] = '.';
                    if (j < c-1) newGrid[i][j+1] = '.';
                }
            }
        }
        return newGrid.map(row => row.join(''));
    }
    // The grid pattern repeats every 4 steps after the first explosion
    let firstExplosion = explode(grid);
    let secondExplosion = explode(firstExplosion);
    if (n % 4 === 3) return firstExplosion;
    else return secondExplosion;
}
