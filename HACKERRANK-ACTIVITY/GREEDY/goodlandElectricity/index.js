function pylons(k, arr) {
    const n = arr.length;
    let i = 0;
    let count = 0;

    while (i < n) {
        let found = false;
        
        for (let j = Math.min(i + k - 1, n - 1); j >= i - k + 1 && j >= 0; j--) {
            if (arr[j] === 1) {
                count++;
                i = j + k; 
                found = true;
                break;
            }
        }
        if (!found) return -1; 
    }

    return count;
}
