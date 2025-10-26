I take the input array and sort it in ascending order. This way, the smallest numbers are at the front and the largest numbers are at the back.

Then, for the minimum sum, I add up all the numbers except the last one (since that’s the largest number). I do that by slicing from index 0 up to arr.length - 1 and then using reduce to sum them up.

For the maximum sum, I do the opposite: I add up all the numbers except the first one (since that’s the smallest number). That’s done by slicing from index 1 to the end and reducing them as well.

Finally, I just print the result using console.log(min, max).