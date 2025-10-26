So basically I:
- Compute shift = k % n, because rotating by the array length does nothing.
- For each query position q, I figure out which index in the original array ends up there after the right rotations. That original index is (q - shift + n) % n—subtract the shift, add n so it never goes negative, then mod by n to wrap around.
- I look up a[originalIndex] and collect those values.
That gives the value at each requested index as if you’d performed the right-circular rotation k times.
