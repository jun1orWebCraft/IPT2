function abbreviation(a, b) {
    const dp = Array.from({ length: a.length + 1 }, () =>
        Array(b.length + 1).fill(false)
    );
    dp[0][0] = true;

    for (let i = 0; i <= a.length; i++) {
        for (let j = 0; j <= b.length; j++) {
            if (dp[i][j]) {
                // If characters match (case-insensitive), we can move both pointers
                if (i < a.length && j < b.length && a[i].toUpperCase() === b[j]) {
                    dp[i + 1][j + 1] = true;
                }
                // If lowercase, we can skip it
                if (i < a.length && a[i] === a[i].toLowerCase()) {
                    dp[i + 1][j] = true;
                }
            }
        }
    }

    return dp[a.length][b.length] ? "YES" : "NO";
}
