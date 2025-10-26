First, I check if the returned year (y1) is greater than the expected year (y2). If it is, the fine is 10000, and I return that immediately.

If the years are the same, I check if the returned month (m1) is greater than the expected month (m2). If it is, the fine is 500 times the difference in months, and I return that.

If the years and months are the same, I check if the returned day (d1) is greater than the expected day (d2). If it is, the fine is 15 times the difference in days, and I return that.

If none of the above conditions are met, it means the book was returned on time or early, so the fine is 0, and I return that.