// Code Wars

// Title:
// What is between?

// Description
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]


PARAMETERS

RETURNS

EXAMPLES

PSEUDOCODE

function between(a, b) {
  let res = [a];
  while(a<b) {
    a += 1;
    res.push(a);
  } 
  return res;
}
