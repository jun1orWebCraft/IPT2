function countingSort(arr) {
    const freq = new Array(100).fill(0);


    for (let num of arr) {
        freq[num]++;
    }
    const sorted = [];
    for (let i = 0; i < freq.length; i++) {
        for (let count = 0; count < freq[i]; count++) {
            sorted.push(i);
        }
    }

    return sorted;
}