function plusMinus(arr) {
    let positives = 0;
    let negatives = 0;
    let zeros = 0;
    let n = arr.length;
    
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            positives++;
        } else if (arr[i] < 0) {
            negatives++;
        } else {
            zeros++;
        }
    }
    
    console.log((positives / n).toFixed(6));
    console.log((negatives / n).toFixed(6));
    console.log((zeros / n).toFixed(6));
}
