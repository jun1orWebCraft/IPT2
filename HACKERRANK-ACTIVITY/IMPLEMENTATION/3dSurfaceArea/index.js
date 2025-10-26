function surfaceArea(A) {
    const H = A.length;
    const W = A[0].length;
    let area = 0;

    // Directions: up, down, left, right
    const dir = [[-1,0],[1,0],[0,-1],[0,1]];
    
    for(let i=0; i<H; i++){
        for(let j=0; j<W; j++){
            if(A[i][j] > 0) {
                // Top and bottom faces
                area += 2;
                // Sides
                for(const [dx,dy] of dir){
                    let ni = i + dx, nj = j + dy;
                    let neighbor = 0;
                    if(ni >= 0 && ni < H && nj >= 0 && nj < W){
                        neighbor = A[ni][nj];
                    }
                    area += Math.max(A[i][j] - neighbor, 0);
                }
            }
        }
    }
    return area;
}
