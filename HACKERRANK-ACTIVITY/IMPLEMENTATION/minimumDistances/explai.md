I set minDistance to Infinity to keep track of the smallest distance found.
I use two nested loops to check every possible pair of elements in the array.
For each pair, if the elements are equal, I calculate the distance between their indices.
If this distance is smaller than the current minDistance, I update minDistance.
After checking all pairs, if minDistance is still Infinity, it means no equal pairs were found, so I return -1. Otherwise, I return the smallest distance found.