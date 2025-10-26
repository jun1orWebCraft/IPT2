If m == 1, then no moves are possible. All towers are already at minimum height. → First player loses. Return 2.

If m > 1, then First player can always make the first move and mirror whatever Second does. → First player wins. Return 1.

But there's a twist: if the number of towers n is even, Second can mirror First’s moves. → So First loses. Return 2.