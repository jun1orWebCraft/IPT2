- I start at chair s and need to give out m sweets, one per prisoner in sequence.
- Handing out the first sweet counts as position s, so after m sweets I’ve moved forward m – 1 spots from s.
- To wrap around a circle of n chairs, I take (s + m – 1) % n.
- JavaScript’s % can yield 0, but chair 0 doesn’t exist—0 really means we landed exactly on chair n.
- So if I get 0, I return n; otherwise I return the modulo result.
That one-line formula (s + m – 1) % n || n captures the whole process neatly.”
