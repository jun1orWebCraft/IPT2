function howManyGames(p, d, m, s) {
    let gamesBought = 0;
    let currentPrice = p;

    while (s >= currentPrice) {
        s -= currentPrice;
        gamesBought++;
        currentPrice = Math.max(currentPrice - d, m);
    }

    return gamesBought;
}
