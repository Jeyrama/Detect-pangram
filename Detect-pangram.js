/*
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not. Ignore numbers and punctuation.
*/


// Solution

function isPangram(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}

// or

function isPangram(string) {
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}

// or

function isPangram(str) {
  let s = str.toLowerCase();
  let letters = "zqxjkvbpygfwmucldrhsnioate";
  for (let i = 0; i < 26; i++) {
    if (s.indexOf(letters.charAt(i)) == -1) {
      return false;
    }
  }
  return true;
}