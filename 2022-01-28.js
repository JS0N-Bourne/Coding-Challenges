// Code Wars

// Title:
// Is it a palindrome?

// Description
// Write a function that checks if a given string (case insensitive) is a palindrome.


PARAMETERS

RETURNS

input a string
output a boolean

EXAMPLES

given a string (ABBA) return if this string is a palindrome (true)

PSEUDOCODE

transform the string to lowercase
get the backward version of the lowercase string (reverse it)
check if forward version is the same as the backward version

function isPalindrome(myString) {
  const lowercaseInput = myString.toLowerCase();

  const forward = lowercaseInput;

  const backward = lowercaseInput.split("").reverse().join("");

  return forward === backward;
}