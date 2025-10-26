I initialized jumps to 0 and i to 0 (my starting position).
I used a while loop to continue jumping until I reached the last cloud (i < c.length - 1).
Inside the loop, I first checked if a 2-cloud jump was possible and safe (i + 2 < c.length && c[i + 2] === 0).
If it was, I jumped two clouds (i += 2).
Otherwise, I jumped one cloud (i += 1).
In either case, I incremented the jumps counter.
Finally, I returned the total number of jumps.