// Code Wars

// Title:
// Removing Elements

// Description
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!


PREP

PARAMETERS

RETURNS

EXAMPLES

PSEUDOCODE

function removeEveryOther(arr){
  remove arr.filter((e, i) => i % 2 === 0);
}

OR

function removeEveryOther(arr){
  var newArr=[];
for (var i = 0; i < arr.length; i+=2){
  newArr.push(arr[i]);
  }
return newArr;
}