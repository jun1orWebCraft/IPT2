I go through every possible pair of people.
For each pair, I combine their knowledge. Since each person's knowledge is like a string of 1s and 0s (1 means they know the topic, 0 means they don't), I use a special trick called "bitwise OR" to combine their knowledge. This is super efficient!
Then, I count how many topics the team knows. This is like counting how many 1s are in their combined knowledge.
I keep track of the highest number of topics any team knows, and how many teams know that many topics.
Finally, I return those two numbers: the maximum number of topics, and how many teams know that many.