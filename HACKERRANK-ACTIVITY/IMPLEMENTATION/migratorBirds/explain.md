First, I create an array called freq to count how many times each bird type appears. Since bird types are numbered from 1 to 5, I make the array size 6 and ignore index 0.

Then, I loop through the input array and increase the count for each bird type in the freq array.

After counting, I look for the bird type with the highest count. If there’s a tie, I pick the one with the smallest id, because I check the ids in order from 1 to 5.

Finally, I return the id of the most frequently sighted bird.