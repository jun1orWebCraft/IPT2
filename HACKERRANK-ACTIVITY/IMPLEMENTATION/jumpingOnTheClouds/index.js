function jumpingOnClouds(c, k) {
    let energy = 100;
    let n = c.length;

    for (let position = k % n; position !== 0; position = (position + k) % n) {
        energy -= c[position] === 1 ? 3 : 1;
    }

    energy -= c[0] === 1 ? 3 : 1; 
    return energy;
}