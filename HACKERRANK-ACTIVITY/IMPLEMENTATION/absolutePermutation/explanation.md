First, I read the values for $$ n $$ and $$ k $$. The problem wants me to create a list (or permutation) of numbers from 1 to $$ n $$, so that the absolute difference between each number’s position and its value is exactly $$ k $$.

So my approach goes like this:

- If $$ k = 0 $$, it means each number needs to stay in its original position. That’s super simple—I just list the numbers from 1 up to $$ n $$.

- If $$ k \neq 0 $$, I check if $$ n $$ is divisible by $$ 2k $$. That’s really important, because for every block or chunk of $$ 2k $$, I’ll be switching between adding $$ k $$ and subtracting $$ k $$, and I need the blocks to fit perfectly. If $$ n $$ isn’t divisible by $$ 2k $$, it’s impossible to make it work, so I just return -1.

- If it is divisible, here’s what I do:  
  I go through the numbers one by one. For each block of size $$ k $$, I alternate—  
     - for the first $$ k $$ numbers, I add $$ k $$ to their index  
     - for the next $$ k $$ numbers, I subtract $$ k $$  
     - and then I keep switching every $$ k $$ numbers

This way, for every entry, the difference between its value and its position is exactly $$ k $$. Finally, I print or return that whole list as my answer. 

If at any point it’s impossible, like I said, I just return -1 so the program knows there’s no valid permutation.

