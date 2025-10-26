I scan from right to left to find the first character (arr[i]) that is smaller than the character after it. This marks the point where the string can be rearranged to get a bigger word.

If no such character is found (i === -1), the string is already the largest possible permutation, so I return 'no answer'.

I look for the smallest character to the right of arr[i] that is bigger than arr[i] (arr[j]). I swap these two characters.

I reverse the part of the array after position i to get the smallest possible arrangement for that suffix, ensuring the result is the next greater permutation.

I join the array back into a string and return it.