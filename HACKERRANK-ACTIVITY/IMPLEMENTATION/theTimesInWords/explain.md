I created an array called words that maps numbers to their word equivalents, so I can easily convert any number from 1 to 29 into words.

I handle special times like:
o' clock when minutes are 0,
quarter past for 15 minutes,
half past for 30 minutes,
quarter to for 45 minutes.

If minutes are less than 30 (but not 0, 15, or 30), I use the format "X minutes past hour".
If minutes are more than 30, I use "X minutes to next hour", calculating the remaining minutes to the next hour.

I also make sure to use "minute" for 1 and "minutes" for all other values.