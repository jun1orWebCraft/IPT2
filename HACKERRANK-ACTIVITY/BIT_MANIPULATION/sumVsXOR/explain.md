This condition only holds when no carry happens during addition. That means:

For each bit in n that is 0, I can freely choose 0 or 1 in x without causing a carry.

So I count how many 0 bits are in n (excluding leading zeros). Then the answer is 2^count — all possible combinations of those bits.