function minimumAbsoluteDifference(arr) {
    arr.sort((a, b) => a - b);
    let minDifference = Infinity;
    for (let i = 1; i < arr.length; i++) {
        const diff = arr[i] - arr[i - 1];
        if (diff < minDifference) {
            minDifference = diff;
        }
    }
    return minDifference;

}

