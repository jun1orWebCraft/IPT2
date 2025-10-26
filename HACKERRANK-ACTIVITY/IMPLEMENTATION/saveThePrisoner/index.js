function saveThePrisoner(n, m, s) {
  const endPos = (s + m - 1) % n;
  return endPos === 0 ? n : endPos;
}
