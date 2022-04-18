// This code does not execute properly. Try to figure out why.

// function multiply(a, b){
//   a * b
// }


//  So, this is a function declaration. A function declaration formula looks like this:

      // function funcName(parameter1, parameter2) {
      //   //body code using parameter1, parameter2, etc.
      // }

// Here we have a function named "multiply" with two parameters "a" and "b". This part of the code looks correct. 
// But we are missing the second half of the function, a calculation or "return" or "console.log"

function multiply(a,b) {
   return a * b
}

// To test this, let's insert integers into the parameters.

function multiply(a,b) {
  alert a * b
}
multiply(4,13)