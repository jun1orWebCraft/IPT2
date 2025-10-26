I created a reversed version of the input string so I could compare both directions.

Compare ASCII differences For both the original and reversed strings, I calculated the absolute difference between each pair of adjacent characters. Example: For "acxz" → ASCII values: a=97, c=99, x=120, z=122 Differences: |99-97|=2, |120-99|=21, |122-120|=2 → [2, 21, 2]

Check if both lists match If the difference list of the original string matches the reversed one, I return "Funny" Otherwise, it's "Not Funny"