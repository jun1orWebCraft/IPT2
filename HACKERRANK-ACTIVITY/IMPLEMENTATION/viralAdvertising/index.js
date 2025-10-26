function viralAdvertising(n) {
  let shared = 5;
  let cumulativeLikes = 0;

  for (let day = 1; day <= n; day++) {
    const likes = Math.floor(shared / 2);
    cumulativeLikes += likes;
    shared = likes * 3;
  }

  return cumulativeLikes;
}