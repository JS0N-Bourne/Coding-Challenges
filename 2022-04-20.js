// Code Wars

// Title:
// Thinkful - Logic Drills: Traffic light

// Description
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'.

// Note: Use "" instead of '' in C++.



PARAMETERS

RETURNS
return a string

EXAMPLES

PSEUDOCODE


function updateLight(current) {
  return ({green: 'yellow' ,yellow: 'red' ,red: 'green'})[current]
}