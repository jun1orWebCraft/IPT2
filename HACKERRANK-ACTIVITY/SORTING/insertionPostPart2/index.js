function insertionSort2(n, arr) {
    for (let i = 1; i < n; i++) {
        let valueToInsert = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > valueToInsert) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = valueToInsert;
        console.log(arr.join(' '));
    }

}