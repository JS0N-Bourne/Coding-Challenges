// Code Wars

// Title:
// Well of Ideas - Easy Version

// Description
// For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


PARAMETERS
good ideas = a
bad ideas = b

RETURNS

if a < 3, return "Publish!"
if a > 2, return "I smell a series!"
if a = 0, return "Fail!"

EXAMPLES


PSEUDOCODE

input: an array of strings
output: a string

loop over every array element
check if the current element is good
if yes, increase the counter of goods
return the result string depending on the counter

function well(x){
  let num = 0;
  for (let i = 0; i < x.length; i++){
    x[i] === 'good' ? num++ : num;
  }
  if(num > 2){
    return 'I smell a series!';
  } else if (num >= 1 && num <= 2){
    return 'Publish!';
  } else {
    return 'Fail!';
  }
}