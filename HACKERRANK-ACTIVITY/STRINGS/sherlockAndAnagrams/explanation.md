I looped through every possible substring using two nested loops.

For each substring, I sorted its characters so that anagrams like "ab" and "ba" both become "ab".

I stored the frequency of each sorted substring in an object called substrFreq.

If a sorted substring appeared more than once, I calculated how many unique pairs I could form using the formula 
𝑛(𝑛−1)/2.

Finally, I returned the total count of anagrammatic pairs.