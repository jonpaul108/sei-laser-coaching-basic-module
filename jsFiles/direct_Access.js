//Given a string and an index, return the character at the given index. 

function givenIndex(str, ind) {
  return str[ind];
}


//Given an array of words and an index, return the word at the given index.


function givenIndex2(arr, ind) {
  return arr[ind];
}

//Given an object and a key (char), return the value found at the key.

function objectAccess(obj, char) {
  return obj[char];
}

//Given an array of objects (arr), an index (ind) and a key (k), return the value at the key from the object designated by the given index.

function nestedAccess(arr, ind, k) {
  return arr[ind][k];
}


//Given an array of different length words and two different indexes, return the index of the word with the greater length.
  

function longerWord(arr, idx1, idx2) {
  return arr[idx1].length > arr[idx2].length ? idx1 : idx2;
}

//Given an array of weather information and an index number, return the weather information found at the key 'expected weather' at the given index.

function weatherInfo(weather, ind) {
  return weather[ind]['expected weather']
}

//Given an array containing a single inner array of numbers, return the sum of the first and last numbers of the inner array.

function sumInnerArrayNums(arr) {
  return arr[0][0] + arr[0][arr[0].length - 1];
}

 //Given an array or string with an odd number of elements or characters, return the middle element or character.

function middle(data) {
  return data[Math.floor(data.length / 2)];
}
 

