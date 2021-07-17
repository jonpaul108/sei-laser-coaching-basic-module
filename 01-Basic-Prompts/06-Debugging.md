# Debugging

The final unit of the basic section, `debugging`, introduces you to debugging. Here you will be confronted with written code containing one or more logical errors. 
######
*It is your goal to solve the prompts based on the intention of the original coder, not to resolve these prompts from scratch*. 
Most of the necessary changes are very small. By working to understand how the code works and why the code is incorrect, you should come to an understanding of these small but significant errors.
######
This platform is limited in the ability to debug. It is advisable to use a repl or IDE (such as VS code) in your efforts to debug. 
######
When debugging, and the error is not obvious, you should:
- log
- read code using example data
- run test data
- understand the bug before making changes (i.e. not engaging in "try and see" style of debugging)
######
By implementing the above strategies, you should be able to solve the prompt by:
- finding and understanding the bug
- making small changes to fix the issues
- not deleting and starting over

##

### Objectives
By the end of this unit, you should have:
- better understanding of common errors
- begun to acquire a process for debugging
- deepened ability to read code written by others
- reviewed some common methods
- reviewed basic JS syntax


### !challenge

* type: code-snippet
* id: debugging-1
* language: javascript
* title: Start To End 1

### !question


Given a string `str`, a starting index `start`, and an ending index `end`, get the characters from the start to end. The string should be inclusive of the start and end.
      
*The next problem will have you solve this with a method. This time, attempt to fix the issue using the for loop.*

```js
    var actual = startToEnd1('telescope', 2, 5);
    var expected = 'lesc';
``` 

### !end-question

#### !placeholder

```js
function startToEnd1(str, start, end) {
  var resStr = '';
  for (var i = start; i <= str.length; i++) {
    resStr += str[i];
  }
  return resStr;
}

```

#### !end-placeholder


### !tests

```js
describe('startToEnd1', function() {

  it("return type should be a string", function() {
    expect(startToEnd1('aa', 0, 1)).to.be.a('string')
  })

  it("should return the expected string", function() {
    expect(startToEnd1('telescope', 2, 5)).to.deep.eq('lesc')
    expect(startToEnd1('liked', 0, 3)).to.deep.eq('like')
    expect(startToEnd1('wishy-washy', 5, 10)).to.deep.eq('-washy')
  })

  it("should use a for loop", function() {
    expect(startToEnd1.toString()).to.include('for')
  })

  it("should not split the given string", function() {
    expect(startToEnd1.toString()).to.not.include('.split');
  })

})
```
### !end-tests

### !end-challenge



### !challenge

* type: code-snippet
* id: debugging-2
* language: javascript
* title: Start To End 2

### !question


*This problem is exactly the same as above. This time, correct the use of "slice" to solve the issue.*

Given a string, a starting index, and an ending index, get the characters from the start to end. The string should be inclusive of the start and end.
      
     

```js
    var actual = startToEnd2('telescope', 2, 5);
    var expected = 'lesc';
``` 

### !end-question

#### !placeholder

```js
  function startToEnd2(str, start, end) {
    return str.slice(start, end);
  }

```

#### !end-placeholder


### !tests

```js
describe('startToEnd2', function() {

  it("return type should be a string", function() {
    expect(startToEnd2('aa', 0, 1)).to.be.a('string')
  })

  it("should return the expected string", function() {
    expect(startToEnd2('telescope', 2, 5)).to.deep.eq('lesc')
    expect(startToEnd2('liked', 0, 3)).to.deep.eq('like')
    expect(startToEnd2('wishy-washy', 5, 10)).to.deep.eq('-washy')
  })

  it("should use the 'slice' method", function() {
    expect(startToEnd2.toString()).to.include('.slice')
  })

  it("should not split the given string", function() {
    expect(startToEnd2.toString()).to.not.include('.split');
  })

})
```
### !end-tests

### !end-challenge


### !challenge

* type: code-snippet
* id: debugging-3
* language: javascript
* title: Exclusive 1

### !question


Given a string `str`, a starting index `start`, and an ending index `end`,  return a new string of the characters from `start` to `end`. The new string should be exclusive of `start` and `end`.
      
*The next problem will have you solve this with a method. This time, attempt to fix the issue using a 'for' loop.*
     

```js
    var actual = exclusive1('telescope', 2, 5);
    var expected = 'es';
``` 

### !end-question

#### !placeholder

```js
 function exclusive1(str, start, end) {
    var resStr = '';
    for (var i = start; i <= end; i++) {
      resStr += str[i];
    }
    return resStr;
  }

```

#### !end-placeholder


### !tests

```js
describe('exclusive1', function() {

  it("return type should be a string", function() {
    expect(exclusive1('aaa', 0, 2)).to.be.a('string')
  })

  it("should return the expected string", function() {
    expect(exclusive1('telescope', 2, 5)).to.deep.eq('es')
    expect(exclusive1('liked', 0, 3)).to.deep.eq('ik')
    expect(exclusive1('wishy-washy', 5, 10)).to.deep.eq('wash')
  })

  it("should use a 'for' loop", function() {
    expect(exclusive1.toString()).to.include('for')
  })

  it("should not split the given string", function() {
    expect(exclusive1.toString()).to.not.include('.split');
  })

})
```
### !end-tests

### !end-challenge


### !challenge

* type: code-snippet
* id: debugging-4
* language: javascript
* title: Exclusive 2

### !question


Given a string `str`, a starting index `start`, and an ending index `end`,  return a new string of the characters from `start` to `end`. The new string should be exclusive of `start` and `end`.
      
*This problem is the same as the problem above. Solve it by debugging the "slice" method.*
     

```js
    var actual = exclusive2('telescope', 2, 5);
    var expected = 'es';
``` 

### !end-question

#### !placeholder

```js
 function exclusive2(str, start, end) {
    return str.slice(start, end);
  }

```

#### !end-placeholder


### !tests

```js
describe('exclusive2', function() {

  it("return type should be a string", function() {
    expect(exclusive2('aaa', 0, 2)).to.be.a('string')
  })

  it("should return the expected string", function() {
    expect(exclusive2('telescope', 2, 5)).to.deep.eq('es')
    expect(exclusive2('liked'), 0, 3).to.deep.eq('ik')
    expect(exclusive2('wishy-washy'), 5, 10).to.deep.eq('wash')
  })

  it("should use the 'slice' method", function() {
    expect(exclusive2.toString()).to.include('.slice')
  })

  it("should not split the given string", function() {
    expect(exclusive2.toString()).to.not.include('.split');
  })

})
```
### !end-tests

### !end-challenge


### !challenge

* type: code-snippet
* id: debugging-5
* language: javascript
* title: Concat Me

### !question


Given a string `name`, return a string containing `name` and `'hello'` separated by a comma and a space

     

```js
    var actual = concatMe('Josh');
    var expected = 'Josh, hello';
``` 

### !end-question

#### !placeholder

```js
 function concatMe(name) {
    var message = name;
    message + ', hello';
    return message;
  }
```

#### !end-placeholder


### !tests

```js
describe('concatMe', function() {

  it("return type should be a string", function() {
    expect(concatMe('Tom')).to.be.a('string')
  })


  it("should return the expected string", function() {
    expect(concatMe('Josh')).to.deep.eq('Josh, hello')
    expect(concatMe('Tom')).to.deep.eq('Tom, hello')
    expect(concatMe('Jeremy')).to.deep.eq('Jeremy, hello')
  })


  it("should not split the given string", function() {
    expect(concatMe.toString()).to.not.include('.split');
  })

})
```
### !end-tests

### !end-challenge




### !challenge

* type: code-snippet
* id: debugging-6
* language: javascript
* title: Replace Char

### !question


Given a string `str` and a character `char`, replace the first letter of `str` with `char`. 
Return the new string.

     

```js
    var actual = replaceChar('jellow', 'm');
    var expected = 'mellow';
``` 

### !end-question

#### !placeholder

```js
function replaceChar(str, char) {
  var res = str;
  res[0] = char;
  return res;
}
```

#### !end-placeholder


### !tests

```js
describe('replaceChar', function() {

  it("return type should be a string", function() {
    expect(replaceChar('Tom', 'M')).to.be.a('string')
  })


  it("should return the expected string", function() {
    expect(replaceChar('Josh', 'M')).to.deep.eq('Mosh')
    expect(replaceChar('jellow', 'm')).to.deep.eq('mellow')
    expect(replaceChar('lake', 'r'), 5, 10).to.deep.eq('rake')
  })


  it("should not split the given string", function() {
    expect(replaceChar.toString()).to.not.include('.split');
  })

})
```
### !end-tests

### !end-challenge




### !challenge

* type: code-snippet
* id: debugging-7
* language: javascript
* title: Default Key

### !question

`DefaultKey` takes in three arguments: an object `obj`, a key `k`, and a value `val`. If `k` is not a property on the given `obj`, add the property with `val` as the value at `k`. Return the given object. 

     

```js
var testObj1 = {
  a: 'bee',
  c: 'deli',
  f: 'guard',
}

var actual1 = defaultKey(testObj1, 'd', 'orange');
var expected1 = {
  a: 'bee',
  c: 'deli',
  f: 'guard',
  d: 'orange'
}

var testObj2 = {
  a: 'bee',
  c: 'deli',
  f: 'guard',
}

actual2 = defaultKey(testObj2, 'a', 'free');
expected2 = {
  a: 'bee',
  c: 'deli',
  f: 'guard',
}
``` 

### !end-question

#### !placeholder

```js
function defaultKey(obj, k, val) {
  if (obj['key'] === undefined) {
    obj.k = val;
  } 
  return obj;
}
```

#### !end-placeholder


### !tests

```js
describe("defaultKey", function () {
  var testObj1 = {
    a: "bee",
    c: "deli",
    f: "guard",
  };

  var testObj2 = {
    arr1: ["hello", "world"],
    arr2: ["jelly", "donut"],
  };

  it("should return an object", function () {
    expect(defaultKey({ ...testObj1 }, "a", "free")).to.be.an("object");
  });

  it("should have the expected key value pair", function () {
    expect(defaultKey({ ...testObj1 }, "a", "free")).to.have.property(
      "a",
      "bee"
    );
    expect(defaultKey({ ...testObj1 }, "g", "dog")).to.have.property(
      "g",
      "dog"
    );
    expect(
      defaultKey({ ...testObj2 }, "arr3", ["test"]),
      5,
      10
    ).to.have.property("arr3").to.eql(['test']);
    expect(defaultKey({ ...testObj2 }, "arr2", ["test"]), 5, 10)
      .to.have.property("arr2")
      .to.eql(["jelly", "donut"]);
  });

  it("should not iterate over the object", function () {
    expect(defaultKey.toString()).to.not.include("for");
  });

  it("should not use Object.keys or Object.values", function () {
    expect(defaultKey.toString()).to.not.include("Object.keys");
    expect(defaultKey.toString()).to.not.include("Object.values");
  });
});
```
### !end-tests

### !end-challenge



### !challenge

* type: code-snippet
* id: debugging-8
* language: javascript
* title: Find Index

### !question

`findIndex` takes in an array of objects `arrOfObj` and string `key`. It should return the index of `arrayOfObj` where `key` exists as a property. Return -1 if `key` is not found.

     

```js
var arr = [
  {key1: 'Hello'},
  {key2: 'Thoughts'},
  {weird: 'these clothes'},
  {time: 'to get a watch'},
];

var actual = findIndex(accessArr, 'weird')
var expected = 2;


``` 

### !end-question

#### !placeholder

```js
function findIndex(arrOfObj, key){
  var index = 0;
  for (var i = 0; i < arrOfObj.length; i ++) {
    if (arrOfObj[i].key) {
      break;
    }
    index = i;
  }
  return index;
}
```

#### !end-placeholder


### !tests

```js
describe('findIndex', function() {

  var arr = [
  {key1: 'Hello'},
  {key2: 'Thoughts'},
  {weird: 'these clothes'},
  {time: 'get a watch'},
];

var arr2 = [
  {pants: '20'},
  {'shirts': '30'},
  {},
  {},
  {},
  {
    socks: '40',
    hats: '50'
  }
]

  it("should return an index number", function() {
    expect(findIndex([...arr], 'weird')).to.be.a('number')
  })


  it("should return the expected index", function() {
    expect(findIndex([...arr], 'weird')).to.deep.eq(2);
    expect(findIndex([...arr], 'pants')).to.deep.eq(-1);
    expect(findIndex([...arr2], 'socks')).to.deep.eq(5);
  })

  it("should return -1 if the key is not found", function() {
    expect(findIndex([...arr2], 'tyme')).to.deep.eq(-1);
    expect(findIndex([...arr], 'mold')).to.deep.eq(-1);
  })


  it("should not use methods Object.keys or Object.values", function() {
    expect(findIndex.toString()).to.not.include('Object.keys');
    expect(findIndex.toString()).to.not.include('Object.values');
  })

})
```
### !end-tests

### !end-challenge




### !challenge

* type: code-snippet
* id: debugging-9
* language: javascript
* title: Split At Char

### !question


Given an array of strings `arrOfStr` and a target character `target`, return a new array of each element of `arrOfStr` having the `target` character replaced with a space. 
Notes:
The target will appear only once in each string
   

```js
  var arr1 = ['tall_tell', 'jumping_frogs','serious_dogs']
  var char1 = '_';
  var actual1 = splitAtChar(arr1, char1);
  var expected1 = ['tall tell', 'jumping frogs', 'serious dogs'];

  var arr2 = ['aba', 'aba','aba']
  var char2 = 'b';
  var actual2 = splitAtChar(arr2, char2);
  var expected2 = ['a a', 'a a', 'a a'];
``` 

### !end-question

#### !placeholder

```js
 function splitAtChar(arrOfStr, target) {
   var newArr = [];
   for (var i = 0; i < arrOfStr.length; i++) {
     var currStr = arrOfStr[i];
     var newStr = "";
     for (var j = 0; j < currStr.length; j++) {
       if (currStr[j] === target) {
         newStr = " ";
       } else {
         newStr += currStr[j];
       }
     }
     newArr.push(newStr);
   }
   return newArr;
 }

```

#### !end-placeholder


### !tests

```js
describe('splitAtChar', function() {

  var arr1 = ['tall_tell', 'jumping_frogs','serious_dogs'];
  var arr2 = ['aba', 'aba','aba'];
  var arr3 = ['rainy+day', 'warm+day', 'sunny+day', 'snowy+day'];

  it("return type should be an array", function() {
    expect(splitAtChar([...arr1], '_')).to.be.an('array')
  })

  it("should return the expected character", function() {
    expect(splitAtChar([...arr1], '_')).to.eql(['tall tell', 'jumping frogs', 'serious dogs'])
    expect(splitAtChar([...arr2], 'b')).to.eql(['a a', 'a a', 'a a'])
    expect(splitAtChar([...arr3], '+')).to.eql(['rainy day', 'warm day', 'sunny day', 'snowy day'])
  })

})
```
### !end-tests

### !end-challenge