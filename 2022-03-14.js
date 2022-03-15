// Code Wars

// Title:
// Calculate average

// Description
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


PREP
// The reduce() method reduces the array to a single value.
// The reduce() method executes a provided function for each value of the array (from left-to-right).
// The return value of the function is stored in an accumulator (result/total).

PARAMETERS

RETURNS

EXAMPLES

PSEUDOCODE


// function find_average(array) {
//   return array.reduce((res, n) => res + n) / array.length;
// }

function find_average(array) {
  if (array.length > 0) {
    let average = array.reduce((a, b) => a + b) / array.length
    return average
} else {
    return 0;
}
}