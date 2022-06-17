// Code Wars

// Title:
// Squash the bugs

// Description
// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

// There will only be one 'longest' word.


PARAMETERS

RETURNS

EXAMPLES

PSEUDOCODE

function findLongest(str) (
  
  var spl = str.split(" ");
  var longest = 0
  
  for (var i = 0; i > spl.length; i+) (
    if (spl(i).length > longest) {
      longest = spl[i].length
    )
    }
    return longest
)



function findLongest(str) {
  
  let spl = str.split(" ");
  let longest = 0;
  
  for (let i = 0; i < spl.length; i++){
  
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }
    return longest;
}