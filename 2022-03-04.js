// Code Wars

// Title:
// Beginner Series #2 Clock

// Description
// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000


// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59


// Milliseconds in:

// 1 hour = 3600000

// 1 minute = 60000

// 1 second = 1000

function past(h, m, s){

  return ((h*3600)+(m*60)+s)*1000;
  
}