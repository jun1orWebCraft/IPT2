First, I set both the minimum and maximum scores to the score from the first game, since that’s Maria’s starting record. I also set counters for how many times she breaks her minimum and maximum records.

Then, I go through each score starting from the second game.

If Maria scores more than her current maximum, I update the maximum and increase the max break counter.
If she scores less than her current minimum, I update the minimum and increase the min break counter.
At the end, I return an array with the number of times she broke her maximum and minimum records. The first number is for most points, and the second is for least points.