I want to make the array as big as possible, so I try to put the largest numbers at the front.
I can only swap up to k times.
For each position in the array, I check if the biggest number that could go there is already in place. If not, I swap it in (using one of my swaps).
I keep track of where each number is in the array so I can find and swap quickly.
I stop when I run out of swaps or finish the array.