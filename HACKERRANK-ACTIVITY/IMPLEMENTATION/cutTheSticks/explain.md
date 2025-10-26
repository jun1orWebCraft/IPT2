I created an empty array called result to store the number of sticks before each cut.
I used a while loop that runs as long as there are sticks left in the array.
At the start of each round, I record the current number of sticks by pushing arr.length into result.
I find the shortest stick using Math.min(...arr).
I subtract this minimum length from every stick, and filter out any sticks that are now zero or less (since they've been completely cut).
I repeat this process until there are no sticks left.
Finally, I return the result array, which contains the number of sticks cut in each round.