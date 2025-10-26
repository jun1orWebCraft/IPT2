To solve this problem, I want to count how many pairs of numbers in the array add up to a sum that is divisible by k.

So, I use two loops:

The first loop picks the first number of the pair.
The second loop picks the second number, making sure it comes after the first one.
For each pair, I add the two numbers together and check if their sum is divisible by k. If it is, I increase my count.

At the end, I return the total count of such pairs.