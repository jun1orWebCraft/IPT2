I loop from p to q, checking each number to see if it's a Kaprekar number.

For each number n, I calculate its square and convert it to a string.
I split the square into two parts:

The right part has the same number of digits as n.
The left part is whatever remains (or '0' if empty).

I convert both parts to integers and check if their sum equals the original number n.
If it does, I add n to the result list.

After checking all numbers, I print the Kaprekar numbers found, or 'INVALID RANGE' if none were found