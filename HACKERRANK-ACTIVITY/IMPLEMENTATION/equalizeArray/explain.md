The first thing I did was count the frequency of each number in the array. I used an object called [freq] to store these counts.

While counting the frequencies, I also kept track of the maximum frequency I encountered so far. This is stored in the variable [maxFreq].

Once I have the maximum frequency, the number of deletions needed is simply the total number of elements in the array minus the maximum frequency. This is because I'm keeping the most frequent element and deleting everything else.

Finally, I return the number of deletions needed.