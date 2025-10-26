function countSort(arr) {
    const n = arr.length;
    const result = [];
    const count = [];

    // Initialize count array with empty arrays
    for (let i = 0; i < 100; i++) {
        count[i] = [];
    }

    // Fill count array with strings, replacing first half with '-'
    for (let i = 0; i < n; i++) {
        const index = parseInt(arr[i][0]);
        const value = i < n / 2 ? '-' : arr[i][1];
        count[index].push(value);
    }

    // Flatten the count array and join with space
    for (let i = 0; i < 100; i++) {
        result.push(...count[i]);
    }

    console.log(result.join(' '));
}
