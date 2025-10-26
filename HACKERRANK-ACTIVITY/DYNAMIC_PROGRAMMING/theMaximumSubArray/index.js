function maxSubarray(arr) {
    let maxSub = arr[0];
    let currentSub = arr[0];
    let maxSeq = arr[0] > 0 ? arr[0] : 0;

    for (let i = 1; i < arr.length; i++) {
        currentSub = Math.max(arr[i], currentSub + arr[i]);
        maxSub = Math.max(maxSub, currentSub);

        if (arr[i] > 0) {
            maxSeq += arr[i];
        }
    }

    if (maxSeq === 0) {
        maxSeq = Math.max(...arr);
    }

    return [maxSub, maxSeq];
}
