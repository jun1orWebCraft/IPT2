So here’s how I approach the problem. I want to find out if there’s one character I can remove from the string to make it a perfect palindrome. I start by comparing characters from both ends—left and right—moving toward the center. If the characters match, I just keep going.

But if I hit a mismatch, that’s my signal. I pause and check two possibilities: First, I try removing the character on the left side and see if the rest of the string becomes a palindrome. If it does, I return that index. If not, I try removing the character on the right side and check again. If that works, I return the right index.

If neither option fixes the string, then I return -1—meaning no single removal can make it a palindrome.

And if I finish the loop without hitting any mismatches, that means the string is already a palindrome, so I return -1 as well.