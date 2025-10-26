function queensAttack(n, k, r_q, c_q, obstacles) {

    let attackableSquare = 0;
    const directions = [
        [1, 0],   
        [-1, 0],  
        [0, 1],  
        [0, -1], 
        [1, 1],   
        [1, -1],  
        [-1, 1],  
        [-1, -1]  
    ];
    const obstacleSet = new Set(obstacles.map(([r, c]) => `${r},${c}`));
    for (const [dr, dc] of directions) {
        let r = r_q + dr;
        let c = c_q + dc;
        while (r >= 1 && r <= n && c >= 1 && c <= n && !obstacleSet.has(`${r},${c}`)) {
            attackableSquare++;
            r += dr;
            c += dc;
        }
    }
    return attackableSquare;
}