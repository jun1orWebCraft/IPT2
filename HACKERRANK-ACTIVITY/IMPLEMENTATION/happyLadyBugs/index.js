function happyLadyBugs(b) {
    const n = b.length;
    const count = {};
    let hasEmptyCell = false;
    for (let i = 0; i < n; i++) {
        const cell = b[i];
        if (cell === '_') {
            hasEmptyCell = true;
        } else {
            count[cell] = (count[cell] || 0) + 1;
        }
    }
    for (const key in count) {
        if (count[key] === 1) {
            return 'NO';
        }
    }
    if (hasEmptyCell) {
        return 'YES';
    }
    for (let i = 0; i < n; i++) {
        if (b[i] !== b[i - 1] && b[i] !== b[i + 1]) {
            return 'NO';
        }   
    }
    return 'YES';
}