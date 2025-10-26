function equalizeArray(arr) {
    const frequency = {};
    let maxFreq = 0;
    for (const num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
        maxFreq = Math.max(maxFreq, frequency[num]);
    }
    return arr.length - maxFreq;
}