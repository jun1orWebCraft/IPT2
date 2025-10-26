function migratoryBirds(arr) {
    // Create a frequency array for bird types 1-5
    let freq = [0, 0, 0, 0, 0, 0]; // index 0 unused
    for (let id of arr) {
        freq[id]++;
    }
    // Find the type with the highest frequency (and lowest id in case of tie)
    let maxCount = 0;
    let minId = 0;
    for (let i = 1; i <= 5; i++) {
        if (freq[i] > maxCount) {
            maxCount = freq[i];
            minId = i;
        }
    }
    return minId;
}