function quickSort(arr) {
    const pivot = arr[0];
    const result = [];

    // Elements less than pivot
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            result.push(arr[i]);
        }
    }

    // Pivot element
    result.push(pivot);

    // Elements greater than pivot
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > pivot) {
            result.push(arr[i]);
        }
    }

    return result;
}
