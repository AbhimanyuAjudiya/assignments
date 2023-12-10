/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length) return false;

  if(str1.toUpperCase().replaceAll(/ /g,'').split("").sort().join("") === str2.toUpperCase().replaceAll(/ /g,'').split("").sort().join("")) return true;
  return false;
}
isAnagram('Debit Card', 'Bad Credit');
module.exports = isAnagram;
