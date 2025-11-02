Every element appears in many subarrays. If it appears an even number of times, its XOR cancels out (because x ^ x = 0).

If the array length is even, every element appears an even number of times → final XOR is 0.

If the array length is odd, only elements at even indices (0, 2, 4, …) appear an odd number of times → only they affect the result.

If array length is even → return 0
If array length is odd → XOR all elements at even indices