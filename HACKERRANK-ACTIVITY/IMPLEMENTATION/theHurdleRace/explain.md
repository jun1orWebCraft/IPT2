Using hurdleRace to first grab the tallest hurdle with Math.max(...height), then I subtract my natural jump height k from that. If the result is negative—meaning I can already clear it—I just return 0. Otherwise I return that difference, which tells me exactly how many potion doses I need.


