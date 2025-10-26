function gridChallenge(grid) {

    for (let i = 0; i < grid.length; i++) {
        grid[i] = grid[i].split('').sort().join('');
    }


    for (let col = 0; col < grid[0].length; col++) {
        for (let row = 1; row < grid.length; row++) {
            if (grid[row][col] < grid[row - 1][col]) {
                return "NO";
            }
        }
    }

    return "YES";
}
