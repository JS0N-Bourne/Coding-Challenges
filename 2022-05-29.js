// Code Wars

// Title:
// Correct the mistakes of the character recognition software

// Description
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.



PARAMETERS
Input: What do I put in? a string

RETURNS
Output: What do I want to get out? a string with corrections

EXAMPLES

PSEUDOCODE


function correct(string)
{ return string.replace(/5/g,'S').replace(/0/g,'O').replace(/1/g,'I');
}