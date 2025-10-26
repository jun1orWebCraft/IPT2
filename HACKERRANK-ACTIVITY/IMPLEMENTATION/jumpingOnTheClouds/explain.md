I started with energy = 100 and got the number of clouds n = c.length.
I used a for loop to simulate the jumps.
I started at the cloud k % n (to handle the initial jump).
I kept jumping until I landed back at the starting cloud (position 0).
In each jump, I calculated the energy loss: 3 if it's a thundercloud, 1 if it's a safe cloud.
After the loop, I also needed to deduct the energy for the very first cloud I started on (index 0), which I did with energy -= c[0] === 1 ? 3 : 1;
Then, I returned the remaining energy.