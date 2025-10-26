function pageCount(n, p) {
    // Turns from the front: floor(p / 2)
    // Turns from the back: floor((n / 2) - (p / 2))
    const fromFront = Math.floor(p / 2);
    const fromBack = Math.floor(n / 2) - Math.floor(p / 2);
    return Math.min(fromFront, fromBack);
}