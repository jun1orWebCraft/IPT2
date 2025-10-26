First, I use .map() to loop through every grade in the grades array. That lets me transform each grade and return a new array called finalGrades.

Now here’s the rule: if a student’s grade is less than 38, it’s considered a failing grade, so we leave it as is—no rounding.

But if the grade is 38 or higher, we check how close it is to the next multiple of 5. That’s where grade % 5 comes in—it tells me how far the grade is from the next round number.

If the remainder is 3 or more, that means the grade is only 2 or fewer points away from the next multiple of 5. So we round it up by subtracting the remainder and adding 5.

Otherwise, we just return the original grade.

Finally, we return the new array of finalGrades, which contains all the adjusted scores.