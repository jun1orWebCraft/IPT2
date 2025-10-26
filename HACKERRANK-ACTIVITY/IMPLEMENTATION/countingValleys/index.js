function countingValleys(steps, path) {
    let valleys = 0;
    let altitude = 0;
    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') {
            altitude++;
            // If we just came up to sea level, we finished a valley
            if (altitude === 0) {
                valleys++;
            }
        } else if (path[i] === 'D') {
            altitude--;
        }
    }
    return valleys;
}