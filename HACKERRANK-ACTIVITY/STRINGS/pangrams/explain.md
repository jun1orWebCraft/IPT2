Convert the input string s to lowercase to ensure case-insensitive comparison.

Create a reference string containing all 26 letters of the English alphabet: "abcdefghijklmnopqrstuvwxyz".

Loop through each character in the alphabet.

For each character, check if it exists in the input string s using .includes().

If any character is missing, return "not pangram" immediately.

If the loop completes and all letters are found, return "pangram".