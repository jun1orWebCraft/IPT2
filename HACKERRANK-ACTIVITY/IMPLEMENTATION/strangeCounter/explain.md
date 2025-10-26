First, I set up two variables:
time = 1 → this marks the start of the first countdown cycle.
value = 3 → the counter starts at 3 and counts down to 1.

Then, I use a while loop to find which cycle the given time t falls into.

If t is greater than the current cycle’s start time, it means we’ve moved past this cycle.

So I subtract the current time from t to shift the reference point.

I also double both time and value to move to the next cycle, since each cycle is twice as long and starts with double the value.

Once I find the correct cycle, I calculate the value shown at time t:

I subtract the offset (t) from the current cycle’s starting value (value) and add 1.

This gives the exact number displayed on the counter at time t.

Finally, I return that number.