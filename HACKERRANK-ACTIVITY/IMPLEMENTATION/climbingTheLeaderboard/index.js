function climbingLeaderboard(ranked, player) {
 
  const uniqueScores = [];
  for (let score of ranked) {
    if (uniqueScores[uniqueScores.length - 1] !== score) {
      uniqueScores.push(score);
    }
  }

  const result = [];
  let idx = uniqueScores.length - 1;

  for (let pts of player) {
    while (idx >= 0 && pts >= uniqueScores[idx]) {
      idx--;
    }

    result.push(idx + 2);
  }

  return result;
}

