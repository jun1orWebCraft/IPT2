First, I understand the pattern:
The original message is always "SOS" repeated multiple times.

Cosmic radiation may alter some characters.
I need to compare the received string to the expected "SOS" pattern.

Then, I loop through each character in the received string:
For every 3-character block, I compare it to "SOS".

If a character doesn’t match the expected one, I increase the count.

Finally, I return the total number of altered characters.