function runningTime(arr) {
    let shifts = 0;
    for (let i = 1; i < arr.length; i++) {
        let value = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > value) {
            arr[j + 1] = arr[j];
            shifts++;
            j = j - 1;
        }
        arr[j + 1] = value;
    }
    return shifts;

}