I sort array A in ascending order. I sort array B in descending order.

Then I pair each element from A with the corresponding one in B. For each pair, I check if their sum is at least k.

If all pairs satisfy A[i] + B[i] ≥ k, I return "YES". If even one pair fails, I return "NO"