function getMinimumCost(k, c) {
    c.sort((a, b) => b - a); // Sort prices descending
    let total = 0;
    for (let i = 0; i < c.length; i++) {
        // Math.floor(i / k) gives how many flowers this friend has already bought
        total += (Math.floor(i / k) + 1) * c[i];
    }
    return total;
}