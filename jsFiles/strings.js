//Given a string, combine the first and third characters of the string. Return the result. 
//Do not split or iterate to solve this prompt.

function firstAndThird(str) {
  return str[0] + str[2];
}



//Given two strings, return their lengths multiplied together.

function lengthOfStringsMultiplied(str1, str2) {
  return str1.length * str2.length;
 }

//`LengthAsIndex` takes in two strings, `str1` and `str2`. Return the character of `str1` that exists at the index matching the length of `str2`. The length of`str1` will always be greater than the length of `str2`

function lengthAsIndex(str1, str2) {
  return str1[str2.length];
}

//Given a string, return the sum of the indexes.

function sumIndex(str) {
  var sum = 0;
  for (var i = 1; i < str.length; i++) {
    sum += i;
  }
  return sum;
}

//Given two strings `str1` and `str2`, return true if `str2` is the reverse of `str1`, and false if not. 

function isMirror(str1, str2) {
  var reverse = str2.split('').reverse().join('');
  return str1 === reverse;
}

//Given a string `str` and an array of index numbers `indexes`, use the index numbers to combine characters in the string into a new word. 
//The indexes are in order from left to right.

function hiddenWord(str, indexes) {
  var newStr = '';
  for (var i = 0; i < indexes.length; i++) {
    newStr += str[indexes[i]];
  }
  return newStr;
}




