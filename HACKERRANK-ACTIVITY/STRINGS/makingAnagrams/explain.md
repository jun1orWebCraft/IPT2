First, I create a frequency map for each string. That means I count how many times each letter appears in both strings.

Then, I compare the two maps. For each letter from 'a' to 'z', I check how many extra characters exist in one string compared to the other.

I calculate the absolute difference in counts for each letter and add them all up. That total tells me how many deletions I need to make.

So basically, I’m balancing the character counts between the two strings. If one string has more 'a's than the other, I delete the extras. I do this for every letter.

I return the total number of deletions required to make both strings anagrams.