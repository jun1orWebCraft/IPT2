A queen can attack in 8 directions: horizontally, vertically, and diagonally. I defined these directions as pairs of row and column offsets in the directions array.

To efficiently check if a square contains an obstacle, I stored the coordinates of all obstacles in a Set. This allows for fast lookups. I converted the row and column coordinates to a string format ("r,c") to store them in the set.

I loop through each of the 8 directions.
Move in Each Direction: For each direction, I start from the queen's position and move one step at a time in that direction.

If the new position is within the bounds of the chessboard (i.e., the row and column numbers are between 1 and n).

If the new position contains an obstacle (by checking if the coordinates are in the obstacleSet).

If the new position is within the bounds and doesn't contain an obstacle, it means the queen can attack that square. So, I increment the attackableSquare counter.

I continue moving in the same direction until I hit the edge of the board or encounter an obstacle.

I repeat steps 4-7 for all 8 directions.

Finally, I return the total number of attackableSquare.