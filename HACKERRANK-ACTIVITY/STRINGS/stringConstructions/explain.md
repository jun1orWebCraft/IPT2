I don’t need to track the whole string—I just care about unique characters.

Every time I see a new character that hasn’t appeared before, I pay $1 to add it.

If the character already exists in the string I’m building, I can reuse it as a substring for free.

So I loop through the string and count how many distinct characters there are. That’s my total cost.