// Complete the solution so that it reverses the string passed into it.

//  'world'  =>  'dlrow'
//  'word'   =>  'drow'


// Use three methods: 
// String.prototype.split() method,
// array.prototype.reverse() method,
// array.prototype.join() method

// Turn the string into an array.
// Split the array.
// Reverse array.
// Join array.

function reverseString(str) {
  // use the split method to return a new array
  let splitString = str.split(""); // let splitString = "hello".split("");
  // ["h","e","l","l","o"]

  // use the reverse() method to reverse the new array
  let reverseArray = splitString.reverse(); // let reverseArray = ["h","e","l","l","o"].reverse()
  // ["o","l","l","e","h"]

  // use the join() method to join all elements of the array into a string
  let joinArray = reverseArray.join(""); // let joinArray = ["o","l","l","e","h"].join("")
  // "olleh"

  // return the reversed string
  return joinArray; // "olleh"
}

reverseString("hello");


// ANOTHER WAY

function solution(str){
  return str.split('').reverse().join('');  
}


// ANOTHER WAY

const solution = str => str.split('').reverse().join('');