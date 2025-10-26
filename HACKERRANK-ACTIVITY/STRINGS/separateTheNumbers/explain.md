To solve this, I try different starting lengths for the first number. For example, if the string is "91011", I try:

First number = "9" → then check if "10" and "11" follow.

If the sequence builds correctly and matches the original string, then it’s valid.

I use a loop to try all possible starting lengths from 1 to s.length / 2. Why only half? Because if the first number is longer than half the string, there’s no room left for a second number.