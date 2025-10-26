Since the numbers are stored as strings and can be extremely long—like 10⁶ digits—I can’t just convert them to integers and sort. That would break or slow down the program.

So instead, I sort the strings by comparing their lengths first. A shorter string means a smaller number.

If two strings have the same length, I compare them lexicographically—just like dictionary order.

This way, I avoid converting strings to numbers and still get the correct numerical sort.