I sort the array in ascending order. That way, numbers that are close together end up next to each other.

Then I look at every pair of consecutive numbers. Since the array is sorted, the smallest differences will be between neighbors.

For each pair, I calculate the absolute difference. That’s just the positive value of the difference—no negatives.

I keep track of the smallest difference I find. That’s the final answer.