/*
Write a function named `pushEveryIndex`
  Given an array of strings `arr`, push every index and the word found at the index to a new array, and return the new array.
  The format should look like: 
  `[[index]: [word], [index]: [word]]`
*/

function pushEveryIndex(arr) {
  var indexes = [];
  for (var i = 0; i < arr.length; i++) {
    indexes.push(i + ':' + ' ' + arr[i]);
  }
  return indexes;
}

//Write a function named `pushFromStart`
//Given an array `arr` and starting number `start`, push every element from `start` in `arr` to a new array. 
//Return the new array.

function pushFromStart(arr, start) {
  var newArr = [];
  for (var i = start; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

/*
Write a function named `startToEnd`
Given an array `arr`, a start number `start`, and an end number `end`, return a new array of every element from `start` to one before `end`.
If `end` is greater than the length of `arr`, include `undefined` for invalid index.
*/

function startToEnd(arr, start, end) {
  var newArr = [];
  for (var i = start; i < end; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}


//Given an array or a string `data` and a number `num`, iterate over `data` from 0 by `num` and push each element or character to a new array. If num is less than or equal to 0, return a new array.
//Return the new array.


function iterateByNum(data, num) {
  var arr = [];
  if (num <= 0) {
    return arr;
  }
  for (var i = 0; i < data.length; i += num) {

    arr.push(data[i]);
  }
      console.log("data", data);
  return arr;
 }

/*
 Given a string or an array of characters `data` and a target character `target`, return the index of the first instance (starting from index 0) `target` appears in `data`. Return -1 if it is not found.
 *Do not use the 'split' method.*
*/

function firstInstance(chars, target) {
  return chars.indexOf(target);
}


// Given a string or an array of characters `chars` and a target character `target`, return the index of the last instance `target` is found in `chars`. Return -1 if `target` is not found.
 //Do not use the 'split' method.

function lastInstance(chars, target) {
  return chars.lastIndexOf(target);
 }
 
//Given a string `str` that will always contain two lower case 'x' characters, return an array containing the two indexes where the 'x' characters are found.

function twoIndexes(str) {
  return [str.indexOf('x'), str.lastIndexOf('x')];
}

//Given a string that will always contain two lower case 'x' characters, return how many characters are between the x's exclusive of the start and ending 'x.'

function twoIndexesExclusive(str) {
  var indexes = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'x' ) {
      indexes.push(i);
    }
  }
  return str.slice(indexes[0] + 1, indexes[indexes.length - 1]).length;
 }

  //Given a string or an array of characters `chars` and a target character `target`, return true if every character in `chars` matches `target` or false if any characters do not match `target`.

function everyCharMatch(chars, target) {
 
  for (var i = 0; i < chars.length; i++) {
    if (chars[i] !== target) {
      return false;
    }
  }
  return true;

 }
  
// Given a string or an array of characters `chars` and a target character `target`, return true if every other character (starting from index 0) in `chars` matches `target`, or false if a character does not match.

function everyOtherCharMatch(chars, target) {
  
  for (var i = 0; i < chars.length; i += 2) {
    if (chars[i] !== target) {
      return false;
    }
  }
  return true;
 }

/*
Given a number `num` that is greater than or equal to 0, push the message 'I code everyday' into a new array as many times as the number.
Return the new array.
*/

function codeEveryday(num) {
  var arr = [];
  for (var i = 1; i <= num; i++) {
    arr.push('I code everyday');
  }
  return arr;
 }

// Given an array of numbers `arr` containing an even number of elements, sum every two elements and push the numbers into a new array.
//Note: The new array should have half the length of the passed in array.

function sumPairs(arr) {
  var sums = [];
  for (var i = 0; i < arr.length; i+=2) {
    sums.push(arr[i] + arr[i + 1]);
  }
  return sums;
}

