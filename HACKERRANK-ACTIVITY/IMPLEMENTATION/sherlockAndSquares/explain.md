Lower bound: I take the square root of a and round it up to the nearest whole number using Math.ceil(). This gives me the smallest integer whose square is greater than or equal to a.
Upper bound: I take the square root of b and round it down to the nearest whole number using Math.floor(). This gives me the largest integer whose square is less than or equal to b.
Calculate the result: The number of perfect squares between a and b is simply the difference between the upper and lower bounds, plus 1. So, I calculate upper - lower + 1 and store it in the result variable.
And I return the result.