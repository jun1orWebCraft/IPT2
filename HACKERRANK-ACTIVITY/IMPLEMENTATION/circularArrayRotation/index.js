function circularArrayRotation(a, k, queries) {
  const n = a.length;
  const shift = k % n;
  return queries.map(q => {
    const originalIndex = (q - shift + n) % n;
    return a[originalIndex];
  });
}
