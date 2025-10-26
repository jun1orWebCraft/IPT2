I’m given a 32-bit unsigned integer. My task is to flip all the bits—turn every 0 into 1, and every 1 into 0.

Since we’re working with 32 bits, the maximum value is:

2^32 - 1 = 4294967295

So instead of flipping each bit manually, I subtract the number from 4294967295. That gives me the flipped result.