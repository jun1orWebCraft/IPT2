function almostSorted(arr) {
    let sorted = [...arr].sort((a, b) => a - b);
    let l = -1, r = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== sorted[i]) {
            if (l === -1) l = i;
            r = i;
        }
    }

    // Try to swap
    let swapped = [...arr];
    [swapped[l], swapped[r]] = [swapped[r], swapped[l]];
    if (swapped.every((v, i) => v === sorted[i])) {
        console.log("yes");
        console.log(`swap ${l + 1} ${r + 1}`);
        return;
    }

    // Try to reverse
    let reversed = [...arr];
    let sub = reversed.slice(l, r + 1).reverse();
    reversed.splice(l, r - l + 1, ...sub);
    if (reversed.every((v, i) => v === sorted[i])) {
        console.log("yes");
        console.log(`reverse ${l + 1} ${r + 1}`);
        return;
    }

    console.log("no");
}
