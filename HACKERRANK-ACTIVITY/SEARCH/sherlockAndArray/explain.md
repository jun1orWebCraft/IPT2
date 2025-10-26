I compute the total sum of the array once—this lets me calculate the right-side sum dynamically.

At each index i, I calculate the sum of elements to the right by subtracting the current value and the left-side sum from the total

If the left and right sums match, I’ve found the balance point.

I add the current value to the left sum before moving to the next index.

If no balance point is found after scanning the array, I return 'NO'