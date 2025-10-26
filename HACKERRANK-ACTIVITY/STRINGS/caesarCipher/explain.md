I normalize the rotation k so it doesn’t exceed 26 (the alphabet length).

I loop through each character in the string:

If it’s an uppercase letter, I shift it within 'A' to 'Z'.

If it’s a lowercase letter, I shift it within 'a' to 'z'.

If it’s a symbol or digit, I leave it unchanged.

I use ASCII codes to calculate the shifted character and convert it back using String.fromCharCode.

I return the encrypted string.