function insertionSort1(n, arr) {
    let valueToInsert = arr[n - 1];
    let i = n - 2;
    while (i >= 0 && arr[i] > valueToInsert) {
        arr[i + 1] = arr[i];
        console.log(arr.join(' '));
        i--;
    }
    arr[i + 1] = valueToInsert;
    console.log(arr.join(' '));

}