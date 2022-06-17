// Code Wars

// Title:
// Drink about

// Description
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.


PARAMETERS

RETURNS

EXAMPLES

Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"

PSEUDOCODE

function peopleWithAgeDrink(old) {
  return old <= 13 ? 'drink toddy' : old <= 17 ? "drink coke" : (old <= 18 || old <= 20) ? "drink beer" : "drink whisky"
  };