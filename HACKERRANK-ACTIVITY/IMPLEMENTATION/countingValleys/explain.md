I use two variables: altitude to keep track of my current height above or below sea level, and valleys to count how many valleys I go through.

As I loop through each step in the path:

If the step is 'U' (uphill), I increase the altitude by 1. If this brings me back to sea level (altitude 0), it means I just came up out of a valley, so I add 1 to the valleys count.
If the step is 'D' (downhill), I decrease the altitude by 1.
At the end, valleys tells me how many valleys I walked through during the hike.