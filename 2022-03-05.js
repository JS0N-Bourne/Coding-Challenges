// Code Wars

// Title:
// Invert values

// Description
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

Parameters: "Given a set of numbers" tells us that the inputs are a set of numbers. Assume all numbers are integers. According to examples, numbers will be inside an array.

Returns: return

Examples: Output will be an array with each number changed to its additive inverse. So:

//input
[2, 3, -4]

//output
[-2, -3, 4]

Pseudo Code: We need to look at each number in an array and do something to each. We'll want to return a new array with each number changed. To do this we can use the "map" method, which returns a new array populated with the results of calling a provided function on every element in the array.

//step one: go through each number in the array using map method
//step two: to get a number's additive inverse, multiply it by -1
//step three: return new array


function invert(array) {
  return array.map(num => {
    return num * -1
  } );
}