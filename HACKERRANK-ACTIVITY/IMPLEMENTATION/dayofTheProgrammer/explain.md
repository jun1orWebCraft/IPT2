First, I check if the year is 1918, which is a special case because Russia switched calendars that year. The Day of the Programmer falls on September 26th in 1918, so I return "26.09.1918".

If the year is between 1700 and 1917, Russia used the Julian calendar. In the Julian calendar, a leap year is any year divisible by 4. If it’s a leap year, the Day of the Programmer is September 12th; otherwise, it’s September 13th.

For years after 1918, Russia used the Gregorian calendar. In this calendar, a leap year is either divisible by 400, or divisible by 4 but not by 100. If it’s a leap year, the Day of the Programmer is September 12th; otherwise, it’s September 13th.

So, my function checks which calendar rules to use, figures out if it’s a leap year, and returns the correct date in the format dd.mm.yyyy.