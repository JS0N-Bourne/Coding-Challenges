// Code Wars

// Title: 
// Name Shuffler

// Description
// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"


PARAMETERS
Take in string as an input

RETURNS
Returns string reversed

EXAMPLES

PSEUDOCODE


function nameShuffler(str){
  return str.split(' ').reverse().join(' ');
}