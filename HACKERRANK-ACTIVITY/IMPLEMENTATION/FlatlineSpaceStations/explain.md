First, I sort the array of space station locations. This helps me easily calculate the gaps between them.

Then I check three things:

The distance from the first city to the first space station—because if the first station isn’t at city 0, some cities are left out at the beginning.

The gaps between space stations—I calculate the halfway point between each pair of stations, because that’s the farthest a city between them could be from either station.

The distance from the last space station to the last city—same logic as the first one, but at the end.

I keep track of the maximum distance I find from all these checks. That’s the answer I return.