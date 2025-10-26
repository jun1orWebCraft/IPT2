function gameOfStones(n) {
    return n % 7 === 0 || n % 7 === 1 ? "Second" : "First";

}