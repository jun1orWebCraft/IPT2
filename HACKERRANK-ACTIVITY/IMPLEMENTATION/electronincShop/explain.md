I want to find the most expensive combination of one keyboard and one USB drive that I can buy without going over my budget.

So, I use two loops:

The first loop goes through each keyboard price.
The second loop goes through each USB drive price.
For every possible pair, I add their prices together. If the total is within my budget and is more expensive than any previous combination, I save it as the new maximum.

After checking all combinations, I return the highest total I found. If no combination is affordable, I return -1.