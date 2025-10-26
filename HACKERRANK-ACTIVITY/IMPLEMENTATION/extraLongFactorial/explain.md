 I start with result = BigInt(1). This is because the factorial of 0 and 1 is 1. I use BigInt(1) to make sure the result can hold very large numbers.
I loop from 2 up to the input number n.
In each iteration, I multiply the current result by BigInt(i). This is the core of the factorial calculation: result = result * i.
I convert the BigInt result to a string using result.toString() and return it. This is because HackerRank often expects large numbers to be returned as strings.

