I convert all input values (b, w, bc, wc, z) to BigInt to handle potentially large numbers and avoid integer overflow.

let effectiveBlack = bc < wc + z ? bc : wc + z;: This line determines the most cost-effective way to obtain a black gift. It checks if it's cheaper to buy a black gift directly (bc) or to buy a white gift (wc) and convert it to black (z). The cheaper option is assigned to effectiveBlack.

let effectiveWhite = wc < bc + z ? wc : bc + z;: This line does the same for white gifts. It checks if it's cheaper to buy a white gift directly (wc) or to buy a black gift (bc) and convert it to white (z). The cheaper option is assigned to effectiveWhite.


return String(b * effectiveBlack + w * effectiveWhite);: This line calculates the total cost by multiplying the number of black gifts (b) by the effective price of black gifts (effectiveBlack), multiplying the number of white gifts (w) by the effective price of white gifts (effectiveWhite), adding those two costs together, and then converting the result to a string.
