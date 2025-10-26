function encryption(s) {
    s = s.replace(/\s/g, '');
    const L = s.length;

    let rows = Math.floor(Math.sqrt(L));
    let cols = Math.ceil(Math.sqrt(L));
    if (rows * cols < L) {
        rows += 1;
    }

    const grid = [];
    for (let i = 0; i < L; i += cols) {
        grid.push(s.slice(i, i + cols));
    }

    let result = '';
    for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
            if (grid[r] && grid[r][c]) {
                result += grid[r][c];
            }
        }
        result += ' ';
    }

    return result.trim();
}

