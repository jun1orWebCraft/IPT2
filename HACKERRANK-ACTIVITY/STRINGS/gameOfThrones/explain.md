To form a palindrome, most characters need to appear in pairs—one for each side.

If the string has an even length, then every character must appear an even number of times. If the string has an odd length, then only one character can appear an odd number of times—the middle character.

So I count how many times each character appears. Then I check how many of those counts are odd.

If more than one character has an odd count, it’s impossible to rearrange the string into a palindrome.