function beautifulTriplets(d, arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        let b = a + d;
        let c = b + d;

        if (arr.includes(b) && arr.includes(c)) {
            count++;
        }
    }

    return count;
}
