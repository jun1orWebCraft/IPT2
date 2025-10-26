function gridlandMetro(n, m, k, track) {
  const rows = new Map();

  // Step 1: Group tracks by row
  for (let i = 0; i < k; i++) {
    const [r, c1, c2] = track[i];
    if (!rows.has(r)) rows.set(r, []);
    rows.get(r).push([Math.min(c1, c2), Math.max(c1, c2)]);
  }

  let occupied = 0n; // BigInt

  // Step 2: Merge intervals per row
  for (const intervals of rows.values()) {
    intervals.sort((a, b) => a[0] - b[0]);
    let [start, end] = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
      const [currStart, currEnd] = intervals[i];
      if (currStart <= end) {
        end = Math.max(end, currEnd);
      } else {
        occupied += BigInt(end - start + 1);
        [start, end] = [currStart, currEnd];
      }
    }
    occupied += BigInt(end - start + 1);
  }

  // Step 3: Total cells - occupied cells (use BigInt math)
  const total = BigInt(n) * BigInt(m);
  return (total - occupied).toString(); // return as string to avoid BigInt serialization issue
}