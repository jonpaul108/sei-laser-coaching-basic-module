//Given an object `obj` and a string `prop`, if the string 'key' is a key on the object, return the value found at `'key'`. Otherwise, return the value found at `prop`. Assume either `'key'` or `prop` will always exist on the object.

function fallbackKey(obj, prop) {
  if (obj.key) {
    return obj.key;
  } else {
    return obj[prop];
  }
}



/*
`stringOrArrayOfNums` takes in an object `obj` and a string `myKey`. The key either references an array of numbers or a string. If the key is a string, return it. If it is an array, sum the numbers and return the total as a string.

Hint: search "MDN toString" for a helpful method if you need help converting a number to a string
*/

function stringOrArrayOfNums(obj, myKey) {
  if (typeof obj[myKey] === 'string') {
    return obj[myKey];
  }

  var sum = 0;
  for (var i = 0; i < obj[myKey].length; i++) {
    sum += obj[myKey][i];
  }

  return sum.toString();
}

/*
  Give an object with numbers as values and two keys as strings, create a new property by combining the keys (key1 + key2) and summing the values. Return the given object. 
  - The new key should be the combined keys. 
  - The new value is the sum of the given properties.

  **Best Practices Note: Generally, it is considered bad form to mutate an array or object received as an argument. However, the focus of this problem is on accessing and assigning new properties. It is acceptable in this problem for the sake of learning and practice. For more info, read here: https://blog.sapegin.me/all/avoid-mutation/. Don't worry if you don't fully understand the explanation. It would be a great concept to discuss with your coach.
 */

function combineProperties(obj, key1, key2) {
    
  obj[key1 + key2] = obj[key1] + obj[key2];

    return obj;
}

  //  Given two objects (`obj1` and `obj2`) that both have a property 'hello', return `1` if `obj1`  has 'world' as the value, 2 if the second object has 'world', and -1 if neither have 'world' as a value.
  //Only one or neither object will have 'world' as the value at 'hello'.

function whereIsWorld(obj1, obj2) {
  if (obj1.hello === 'world') {
    return 1;
  } else if (obj2.hello === 'world') {
      return 2;
  }
   return -1;
}



  //Given an array of objects and a key (term), return true if every object has the given term as a key and false if not. 

  function everyObject(arr, term) {
    for (var i = 0; i < arr.length; i++) {
      if (!arr[i][term]) {
        return false;
      }
    }
    return true;
  }

   // Given an array of objects `arr` and a key `term`, return true if anyobject has the given term as a property and false if no objects have the given term. 

  function anyObject(arr, term) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][term]) {
        return true;
      }
    }
    return false;
}
   

//  Given an array of objects and a key `term`, return true if only one object has the given property and false if more than one or no objects contain the term as a key.

function onlyOne(arr, term) {
  var hasTermCount = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][term]) {
      hasTermCount++;
    }
  }
  return hasTermCount === 1;
}


