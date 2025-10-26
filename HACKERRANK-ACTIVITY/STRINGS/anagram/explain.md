First, I check if the string length is odd. If it is, I return -1 right away because I can’t split it into two equal parts.

If the length is even, I split the string into two halves. Then I count how many characters are in the first half, and compare that to the second half.

I use a frequency map to track how many times each character appears in the first half. Then I go through the second half and subtract matches from the map.

Whatever’s left in the map tells me how many characters in the first half don’t have a match in the second half. That’s the number of changes I need to make.