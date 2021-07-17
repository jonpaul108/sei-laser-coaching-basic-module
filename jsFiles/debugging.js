//Given a string, a starting index, and an ending index, get the characters from the start to end. The string should be inclusive of the start and end.
      
//*The next problem will have you solve this with a method. This time, attempt to fix the issue using the for loop.*

function startToEnd1(str, start, end) {
  var resStr = "";
  for (var i = start; i <= end; i++) {
    resStr += str[i];
  }
  return resStr;
}


/*
*This problem is exactly the same as above. This time, correct the use of "slice" to solve the issue.*

Given a string, a starting index, and an ending index, get the characters from the start to end. The string should be inclusive of the start and end.
*/

  function startToEnd2(str, start, end) {
    return str.slice(start, end + 1);
  }

  /*
  Given a string `str`, a starting index `start`, and an ending index `end`,  return a new string of the characters from `start` to `end`. The new string should be exclusive of `start` and `end`.
      
*The next problem will have you solve this with a method. This time, attempt to fix the issue using a 'for' loop.*
  */

 function exclusive1(str, start, end) {
   var resStr = "";
   for (var i = start + 1; i < end; i++) {
     resStr += str[i];
   }
   return resStr;
 }

 /*
 Given a string, a starting index, and an ending index,  get the characters from the start to end. The string should be exclusive of the start and end.
      
*This problem is the same as the problem above. Solve it by debugging the "slice" method.*
 */

 function exclusive2(str, start, end) {
    return str.slice(start + 1, end);
  }


 // Given a string `name`, return a string containing `name` and `'hello'` separated by a comma and a space
  function concatMe(name) {
    var message = name;
    message += ", hello";
    return message;
  }

/*
Given a string `str` and a character `char`, replace the first letter of `str` with `char`. 
Return the new string.
*/

function replaceChar(str, char) {
  var res = str;
  res = char + str.slice(1);
  return res;
}


//`DefaultKey` takes in three arguments: an object `obj`, a key `k`, and a value `val`. If `k` is not a property on the given `obj`, add the property with `val` as the value at `k`. Return the given object. 

function defaultKey(obj, k, val) {
  if (obj[k] === undefined) {
    obj[k] = val;
  }
  return obj;
}


//`findIndex` takes in an array of objects `arrOfObj` and string `key`. It should return the index of `arrayOfObj` where `key` exists as a property. Return -1 if `key` is not found.

function findIndex(arrOfObj, key) {
  var index = -1;
  for (var i = 0; i < arrOfObj.length; i++) {
    if (arrOfObj[i][key]) {
      index = i;
      break;
    }
  }
  return index;
}

//Given an array of strings and a target character, return a new array with each each string having the target character replaced with a space. 
//Notes:
//The target will appear only once in each string

 function splitAtChar(arrOfStr, target) {
   var newArr = [];
   for (var i = 0; i < arrOfStr.length; i++) {
     var currStr = arrOfStr[i];
     var newStr = "";
     for (var j = 0; j < currStr.length; j++) {
       if (currStr[j] === target) {
         newStr += " ";
       } else {
         newStr += currStr[j];
       }
     }
     newArr.push(newStr);
   }
   return newArr;
 }