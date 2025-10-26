The first thing I do is break the input string into something easier to handle. I use .slice(0, 8) to grab just the "hh:mm:ss" part of the string and then .split(':') to turn it into an array with hours, minutes, and seconds separated.

Next, I check whether the original string has "AM" or "PM" in it by using .indexOf(). If the substring isn’t found, .indexOf() will return -1, which makes it easy to test for "PM".

For the conversion logic: if it’s "PM", I need to add 12 to the hour value — but there’s an exception. If the time is already 12 PM, I don’t add anything, because in 24-hour format 12 PM stays 12. On the other hand, for "AM", the only special case is 12 AM, which needs to be converted to "00".

After updating the hours, I just use .join(':') to glue the array back together into the final hh:mm:ss format in 24-hour time.