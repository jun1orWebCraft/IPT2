Starts a counter to track how many "010" patterns we find.

Loops through the string, stopping 3 characters before the end to avoid overflow.

Checks the current 3-character chunk.

If it matches "010", we found a pattern that needs fixing.

Add 1 to the counter and skip ahead 3 characters to avoid overlapping.

If no match, move forward by one character.

Return the total number of changes needed.