function stringConstruction(s) {
    const seen = new Set();

    for (let char of s) {
        seen.add(char);
    }

    return seen.size;
}
