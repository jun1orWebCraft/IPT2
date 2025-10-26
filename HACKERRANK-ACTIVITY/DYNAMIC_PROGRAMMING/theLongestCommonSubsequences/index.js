function longestCommonSubsequence(a, b) {
    const dp = Array.from({ length: a.length + 1 }, () =>
        Array(b.length + 1).fill([])
    );

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                dp[i + 1][j + 1] = [...dp[i][j], a[i]];
            } else {
                dp[i + 1][j + 1] =
                    dp[i + 1][j].length > dp[i][j + 1].length
                        ? dp[i + 1][j]
                        : dp[i][j + 1];
            }
        }
    }

    return dp[a.length][b.length];
}
