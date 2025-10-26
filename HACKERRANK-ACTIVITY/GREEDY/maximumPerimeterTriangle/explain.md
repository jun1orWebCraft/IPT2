I sort the stick lengths in ascending order. That way, I can easily check combinations from smallest to largest.

Then I loop through the array from the end, checking every group of 3 sticks. For each group, I check if they can form a non-degenerate triangle.

To form a triangle, the sum of the two smaller sides must be greater than the largest side.

If the condition is met, I calculate the perimeter. I keep track of the triangle with the maximum perimeter.

If multiple triangles have the same perimeter, I choose the one with the longest maximum side. If there’s still a tie, I pick the one with the longest minimum side.

If no valid triangle exists, I return [-1].