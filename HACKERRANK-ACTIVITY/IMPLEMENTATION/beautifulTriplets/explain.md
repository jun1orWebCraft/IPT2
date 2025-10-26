I loop through each number in the array and treat it as the start of a possible triplet (a).

For each a, I calculate what the next two numbers in the triplet should be (b = a + d and c = b + d).

I check if both b and c exist in the array using arr.includes().

If both are found, I increase my count.

After checking all possibilities, I return the total count of beautiful triplets.