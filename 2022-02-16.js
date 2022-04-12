// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// BREAKDOWN
// we want the user to give us a random number
// then we want to determine if it's even or odd
// we could do that by using % to see if there's a remainder if divided by 2. If the answer is 0, it's an even number. Otherwise, it's odd.
// then we want to return "Odd" or "Even".

const num = Number(prompt('Enter a number', 10))

if (num % 2 === 0) {
  alert("Even");
} else {
  alert("Odd");
}




function even_or_odd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

alert(even_or_odd(5));
alert(even_or_odd(2));