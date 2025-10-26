function hurdleRace(k, height) {
  const maxHurdle = Math.max(...height);
  return Math.max(0, maxHurdle - k);
}