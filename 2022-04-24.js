// Code Wars

// Title:
// Cat years, Dog years

// Description
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that


// PARAMETERS

1 human = 15 cat and 15 dog (1,15,15)
next +1 human = +9 cat and +9 dog (2, 24, 24)
next +1+ human = +4+ cat and +5+ dog each subsequent year (3,28,29)

// RETURNS

// EXAMPLES

// PSEUDOCODE


var humanYearsCatYearsDogYears = function(humanYears) {
  if (humanYears === 1) {return [1,15,15];}
  if (humanYears === 2) {return [2,24,24];}
  return [humanYears, 24+((humanYears-2)*4), 24+((humanYears-2)*5)];
}