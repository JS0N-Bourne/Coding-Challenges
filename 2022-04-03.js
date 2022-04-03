// Code Wars

// Title:
// If you can't sleep, just count sheep!!

// Description
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


PREP

PARAMETERS
giving a positive number = num

RETURNS
return a string that says "1 sheep ... 2 sheep ..." to the value of num

EXAMPLES

PSEUDOCODE

var countSheep = function (num){
  if x < num return `${} sheep ...` * num
}


var countSheep = function (num){
  let result = '';
  for (let i = 1; i <= num; i++) {
    result += i + ' sheep...';
  }
  return result;
}