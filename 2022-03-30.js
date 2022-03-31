// Code Wars

// Title:
// Transportation on vacation

// Description
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).


PARAMETERS
 cost to rent per day = $40   
 rent car 7+ days = $50 off 
 rent car 3+ days = $20 off

RETURNS
 7 days rental = (7 * 40) - 50 = 230
 3 days rental = (3 * 40) - 20 = 100

EXAMPLES

PSEUDOCODE
 To get the rental car cost in dollars, you'll need two scenarios: One for 7 days and one for 3 days.



function rentalCarCost(d) {
  return 40 * d - (d > 6 ? 50 : d > 2 ? 20 : 0)
}
