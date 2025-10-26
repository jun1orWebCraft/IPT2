function quickestWayUp(ladders, snakes) {
    const board = Array.from({ length: 101 }, (_, i) => i);

    // Apply ladders
    for (const [start, end] of ladders) {
        board[start] = end;
    }

    // Apply snakes
    for (const [start, end] of snakes) {
        board[start] = end;
    }

    const visited = new Array(101).fill(false);
    const queue = [[1, 0]]; // [position, moves]

    while (queue.length) {
        const [pos, moves] = queue.shift();
        if (pos === 100) return moves;
        for (let roll = 1; roll <= 6; roll++) {
            const next = board[pos + roll];
            if (next <= 100 && !visited[next]) {
                visited[next] = true;
                queue.push([next, moves + 1]);
            }
        }
    }

    return -1;
}
