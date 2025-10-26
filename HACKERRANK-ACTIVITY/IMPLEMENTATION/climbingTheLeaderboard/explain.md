This function turns the leaderboard into a list of distinct scores, then uses a single pointer from the lowest score up. For each new player score, it moves the pointer left until the leaderboard score is greater than the player’s score. The dense rank is then the pointer’s position plus two, and we collect these ranks for each player score.

- Build uniqueScores by looping through ranked and skipping duplicates.
- Initialize idx to uniqueScores.length - 1.
- For each pts in player:
- While idx >= 0 and pts >= uniqueScores[idx], do idx--.
- Compute rank as idx + 2 and append to result.
- Return the result array.

