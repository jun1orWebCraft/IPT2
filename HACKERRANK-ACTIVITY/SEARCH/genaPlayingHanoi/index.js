function hanoi(posts) {
    const n = posts.length;
    const rods = 4;

    // Encode configuration into integer (2 bits per disk; rod 1..4 stored as 0..3)
    const encode = (arr) => {
        let res = 0;
        for (let i = 0; i < n; i++) {
            res |= (arr[i] - 1) << (2 * i);
        }
        return res >>> 0; // keep as non-negative JS number
    };

    // Decode integer back into array of rods (1..4)
    const decode = (state) => {
        const arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = ((state >> (2 * i)) & 3) + 1;
        }
        return arr;
    };

    const start = encode(posts);
    const goal = encode(Array(n).fill(1));
    if (start === goal) return 0;

    const visited = new Map();
    const queue = new Array();
    let head = 0;

    queue.push(start);
    visited.set(start, 0);

    while (head < queue.length) {
        const curr = queue[head++];         // efficient pop-from-front
        const currArr = decode(curr);
        const moves = visited.get(curr);

        // Determine top (smallest index) disk on each rod.
        // IMPORTANT: iterate i from 0..n-1 so we pick the smallest disk (topmost) first.
        const top = Array(rods + 1).fill(-1);
        for (let i = 0; i < n; i++) {
            const rod = currArr[i];
            if (top[rod] === -1) top[rod] = i;
        }

        // For each rod that has a top disk, try moving that disk to any other rod
        for (let from = 1; from <= rods; from++) {
            if (top[from] === -1) continue;
            for (let to = 1; to <= rods; to++) {
                if (from === to) continue;

                // Move allowed if dest is empty or top disk on dest is larger (higher index)
                if (top[to] === -1 || top[to] > top[from]) {
                    const nextArr = currArr.slice();
                    nextArr[top[from]] = to;
                    const next = encode(nextArr);

                    if (!visited.has(next)) {
                        visited.set(next, moves + 1);
                        if (next === goal) return moves + 1;
                        queue.push(next);
                    }
                }
            }
        }
    }

    return -1; // should not happen for valid inputs
}