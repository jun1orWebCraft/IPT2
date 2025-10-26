function gemstones(arr) {
    let ls = [...new Set(arr[0])]; // Unique minerals from the first rock
    let sm = ls.length;

    for (let x of ls) {
        for (let i = 1; i < arr.length; i++) {
            if (!arr[i].includes(x)) {
                sm -= 1;
                break;
            }
        }
    }

    return sm;
}
