First, I calculate how many chocolates Bobby can buy with his money. That’s just n / c, where n is the money he has, and c is the cost per chocolate. I use Math.floor() to make sure we’re only counting whole chocolates.

After buying, Bobby has the same number of wrappers as chocolates, so I store that too

Bobby can trade m wrappers for 1 free chocolate. So I use a while loop to keep checking if he has enough wrappers to trade.

I subtract the wrappers he used for the trade (free * m), then add the new wrappers from the free chocolates (+ free). That keeps the cycle going until he can’t trade anymore.

Once Bobby can’t trade anymore, I return the total number of chocolates he ate. 