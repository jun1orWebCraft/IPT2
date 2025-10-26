I sort the array in ascending order.
I look at every group of k consecutive numbers in the sorted array.
For each group, I calculate the difference between the largest and smallest (which is just the last and first in that group).
I keep track of the smallest difference I find. That’s the answer.