// Code Wars

// Title:
// Quarter of the year

// Description
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.


PREP

PARAMETERS 
* given a number 
* decide which quarter (1/1-3/31, 4/1-6/30, 7/1-9/30,10/1-12/31) it falls in

RETURNS
return quarterOf as integer number

EXAMPLES
 if given number 4, expect a return of "2"
 if given number 8, expect a return of "3"

PSEUDOCODE

const quarterOf = (month) => {
  if (month <= 3) {
    return 1;
  }else if(month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else if (month <= 12) {
    return 4;
  }

  }

