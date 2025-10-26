function closestNumbers(arr) {
    arr.sort((a, b) => a - b);
    let minDifference = Infinity;
    let result = [];
    for (let i = 1; i < arr.length; i++) {
        let diff = arr[i] - arr[i - 1];
        if (diff < minDifference) {
            minDifference = diff;
            result = [arr[i - 1], arr[i]];
        }
        else if (diff === minDifference) {
            result.push(arr[i - 1], arr[i]);
        }
    }
    return result;

}