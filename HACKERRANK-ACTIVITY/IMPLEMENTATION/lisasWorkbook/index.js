function workbook(n, k, arr) {
    let page = 1;
    let count = 0;

    for (let i = 0; i < n; i++) {
        const problems = arr[i];

        for (let j = 1; j <= problems; j += k) {
            const start = j;
            const end = Math.min(j + k - 1, problems);

            for (let p = start; p <= end; p++) {
                if (p === page) {
                    count++; // Special problem found
                }
            }

            page++; // Move to next page
        }
    }

    return count;
}
