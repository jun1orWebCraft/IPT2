If I want to find the largest "decent number" with a certain number of digits, here’s what I do:

The number can only have 5’s and 3’s.
The number of 5’s must be a multiple of 3, and the number of 3’s must be a multiple of 5.
To make the number as big as possible, I try to use as many 5’s at the start as I can.
If that doesn’t work, I keep reducing the number of 5’s by 5 each time (and add more 3’s) until I find a combination that works.
If I can’t find any combination that fits the rules, I just print -1.