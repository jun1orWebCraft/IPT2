function breakingRecords(scores) {
    let min = scores[0];
    let max = scores[0];
    let minBreaks = 0;
    let maxBreaks = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
            maxBreaks++;
        } else if (scores[i] < min) {
            min = scores[i];
            minBreaks++;
        }
    }
    return [maxBreaks, minBreaks];
}