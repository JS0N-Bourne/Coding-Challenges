// Code Wars

// Title:
// Sum Mixed Array

// Description
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


PARAMETERS
given array of numbers as strings and numbers

RETURNS
return the sum as a number

EXAMPLES
[5,'four','nine',12] = 5 + 4 + 9 + 12
sum = 30

PSEUDOCODE

function sumMix(x){
  return x.reduce((x, y) => Number(x) + Number(y), 0);
}
