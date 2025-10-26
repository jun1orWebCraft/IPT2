To find the minimum number of pages to turn, I calculate it two ways:

First, I figure out how many pages to turn if I start from the front. Since each turn flips two pages, I use Math.floor(p / 2).

Then, I figure out how many pages to turn if I start from the back. I do this by taking the total number of page turns in the book (Math.floor(n / 2)) and subtracting the number of turns needed to reach the target page from the front.

Finally, I return the smaller of the two numbers. This gives the minimum number of page turns needed to reach the desired page, whether starting from the front or the back.