function flatlandSpaceStations(n, c) {
    c.sort((a, b) => a - b); // Sort space station positions
    let maxDistance = 0;

    // Check distance from first city to first station
    maxDistance = Math.max(maxDistance, c[0]);

    // Check gaps between stations
    for (let i = 1; i < c.length; i++) {
        let gap = Math.floor((c[i] - c[i - 1]) / 2);
        maxDistance = Math.max(maxDistance, gap);
    }

    // Check distance from last station to last city
    maxDistance = Math.max(maxDistance, n - 1 - c[c.length - 1]);

    return maxDistance;
}
