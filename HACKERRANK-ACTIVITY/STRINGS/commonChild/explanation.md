I created a 2D array dp where dp[i][j] stores the length of the longest common child between:

First i characters of s1
First j characters of s2

I used nested loops to compare each character of s1 and s2.

If s1[i-1] === s2[j-1], it means the current characters match.
So I extended the previous subsequence: dp[i][j] = dp[i-1][j-1] + 1

If they don’t match, I took the maximum of:
Skipping a character from s1: dp[i-1][j]
Skipping a character from s2: dp[i][j-1]


The value at dp[n][m] is the length of the longest common child.