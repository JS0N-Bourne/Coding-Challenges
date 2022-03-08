// Code Wars

// Title:
// Beginner Series #1 School Paperwork

// Description
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0


PREP

PARAMETERS

RETURNS

EXAMPLES

if n = 5 and m = 5, expect to return 25 (5 * 5)
if n = 10 and m = 0, expect to return 0

PSEUDOCODE

We want a function that takes in 2 numbers, students and black pages. We will multiply them to get the result.


function paperwork(n, m) {
  if (n <= 0 || m <= 0) return 0;
  return n * m;
}