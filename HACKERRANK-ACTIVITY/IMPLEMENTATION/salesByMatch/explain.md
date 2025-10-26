This function counts how many pairs of socks with matching colors are in the pile.

First, I create an object called `colorCount` to keep track of how many socks there are for each color.  
Then, I loop through each sock in the array. For each sock, I increase its count in `colorCount`.  
Whenever the count for a color becomes even (which means we have a pair), I increase the `pairs` counter by one.

At the end, I return the total number of pairs found. 