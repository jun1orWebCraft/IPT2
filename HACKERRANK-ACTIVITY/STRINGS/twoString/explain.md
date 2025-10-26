I don’t need to find the full substring—just one character that exists in both strings. So instead of checking every possible substring, I simplify the problem.

I create a set from the first string, which gives me all its unique characters. Then I loop through the second string and check if any of its characters exist in that set.

If I find a match, I return 'YES' right away. If I finish the loop without finding any match, I return 'NO'.

This way, I avoid unnecessary comparisons and keep the solution efficient.