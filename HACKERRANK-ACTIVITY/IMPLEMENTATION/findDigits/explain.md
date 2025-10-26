First, I start by creating a counter called count, and I set it to zero. This will keep track of how many digits are valid divisors.

Then I take the number n, convert it to a string, and split it into individual characters using .split(''). That gives me an array of digits—but they’re still in string form.

So I loop through each digit using a for...of loop. Inside the loop, I convert each digit back to a number using parseInt.

Now here’s the important part: I check two things. First, I make sure the digit isn’t zero—because we can’t divide by zero. Second, I check if n % d === 0, which means n is divisible by that digit.

If both conditions are true, I increment the count.

After the loop finishes, I return the final count, which tells me how many digits in n are actual divisors of n