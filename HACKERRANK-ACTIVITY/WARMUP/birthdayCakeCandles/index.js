function birthdayCakeCandles(candles) {
    const max= Math.max(...candles);
    const filtered = candles.filter(ar => ar === max);
    return filtered.length;
}

