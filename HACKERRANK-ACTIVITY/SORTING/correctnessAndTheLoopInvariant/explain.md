I start from index 1 and treat the left side as sorted. I store the current value, then shift larger elements to the right. Once I find the correct spot, I insert the value. After the loop finishes, I print the sorted array using join(' ').


Line 1 in const gives the array size n, and line 2 gives the space-separated integers. I convert them into an array of numbers using .split() and .map(Number).