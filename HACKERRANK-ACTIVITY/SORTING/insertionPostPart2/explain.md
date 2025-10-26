In Part 1, I inserted just one element into its correct position. In Part 2, I repeat that process for every element in the array.

I treat the first element as already sorted. Then, starting from the second element, I compare it with the sorted portion to its left.

If it’s smaller than any of those elements, I shift the bigger ones to the right to make space. Once I find the right spot, I insert the current value.

After each insertion, I print the current state of the array so I can see how the sort evolves step by step.