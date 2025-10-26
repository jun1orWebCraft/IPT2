To solve this problem, I need to turn the given 3x3 matrix into a magic square with the smallest possible cost.
A magic square is a 3x3 grid where the numbers 1 to 9 are all used once, and every row, column, and diagonal adds up to the same number.

There are only 8 possible 3x3 magic squares using the numbers 1 to 9.
So, I list all 8 of them in an array called magicSquares.

For each possible magic square, I calculate the cost to convert the input square into that magic square.
The cost is the sum of the absolute differences between each corresponding cell in the two squares.

Finally, I return the smallest cost I find.