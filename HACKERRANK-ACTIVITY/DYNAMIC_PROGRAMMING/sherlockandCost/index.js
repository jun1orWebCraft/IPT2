function cost(B) {
    let low = 0; 
    let high = 0;

    for (let i = 1; i < B.length; i++) {
        const lowToLow = Math.abs(1 - 1);
        const highToLow = Math.abs(B[i - 1] - 1);
        const lowToHigh = Math.abs(1 - B[i]);
        const highToHigh = Math.abs(B[i - 1] - B[i]);

        const newLow = Math.max(low + lowToLow, high + highToLow);
        const newHigh = Math.max(low + lowToHigh, high + highToHigh);

        low = newLow;
        high = newHigh;
    }

    return Math.max(low, high);
}
