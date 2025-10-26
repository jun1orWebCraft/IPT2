I calculate the sum of balls in each row (representing the capacity of each container) and the sum of balls in each column (representing the total number of balls of each type).

I use nested loops to iterate through the matrix and calculate the row sums and column sums.

I sort the row sums and column sums in ascending order. This is important because it allows me to compare the sums directly, regardless of the original order of the containers and ball types.

If the sorted row sums are equal to the sorted column sums, it means that it's possible to rearrange the balls such that each container contains only balls of the same type.

I loop through the sorted sums and compare the corresponding elements. If any of the elements are different, it means it's impossible to organize the containers as required.

If all the row sums are equal to the column sums, I return "Possible".
Otherwise, I return "Impossible".