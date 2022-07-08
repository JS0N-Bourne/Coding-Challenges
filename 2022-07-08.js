// Code Wars

// Title:
// Vowel remover

// Description
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

PARAMETERS

RETURNS

EXAMPLES

PSEUDOCODE

going to take a String, break it apart to an Array, then filter out the non-vowels, rejoin the array into a string again and return that string

be sure to use a RegEx expression to split the vowels from the string

function shortcut(string) {
  return string.split(/[aeiou]/g).join('')
}

or

function shortcut(string) {
  const vowels = /[aeiou]+/g;
  return string.replace(vowels, "");
}

or

function shortcut(str) {
  return str.split('').filter(function(e){
    return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1
  }).join('')
}