# Iterations
This is the most challenging and longest unit in the basic section. While you may have come here directly, it is built upon the challenges presented in the previous four units. Your challenge is now to use all your knowledge of objects, arrays, and strings as well as iterations and data access to solve increasingly difficult prompts. The goal here is to review or acquire:
- complex iterations (including iterating by various numbers and decrementing)
- general purpose iterations
- elevated problem solving and prompt comprehension skills
- deeper understanding of data and data structures

By the end of the unit, you will be solving prompts similar to beginning level of the intermediate section.
### !challenge

* type: code-snippet
* id: iterations-1
* language: javascript
* title: Push Every Index

### !question


Write a function named `pushEveryIndex`
  Given an array of strings `arr`, push every index and the word found at the index to a new array, and return the new array.
  The format should look like: 
  `[[index]: [word], [index]: [word]]`

```js
  //Expected answer
  var arr = ['turtle', 'fox', 'wolf'];
  var actual = pushEveryIndex(arr);
  var expected = ['0: turtle', '1: fox', '2: wolf'];
``` 

### !end-question

#### !placeholder

```js
function pushEveryIndex(arr) {

}
```

#### !end-placeholder


### !tests

```js
describe('pushEveryIndex', function() {

    it("should return an empty array when given an empty array", function() {
      expect(pushEveryIndex([])).to.be.an('array')
    })

    it("should return an array of elements having form index-colon-word", function() {
      expect(pushEveryIndex(['turtle', 'fox', 'wolf'])).to.eql(['0: turtle', '1: fox', '2: wolf'])
      expect(pushEveryIndex(['mouse', 'cow', 'wolf', 'dog'])).to.eql(['0: mouse', '1: cow', '2: wolf', '3: dog'])
    })

    it("should return an array of strings", function() {
      expect(pushEveryIndex(['salad'])).to.satisfy(function(arr) {
        return arr.every(el => {
          return typeof el === 'string';
        })
      })
    })
})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: iterations-2
* language: javascript
* title: Push From Start

### !question



Write a function named `pushFromStart`
Given an array `arr` and starting number `start`, push every element from `start` in `arr` to a new array. 
Return the new array.

```js
  //example array
  var arr = ['magneto', 'spiderman', 'star lord', 'wolverine', 'iron man', 'doctor strange', 'black widow'];

  //Expected answer 1
  var actual1 = pushFromStart(arr, 3);
  var expected1 = ['wolverine', 'iron man', 'doctor strange', 'black widow'];

  //Expected answer 2
  var actual2 = pushFromStart(arr, 5);
  var expected2 = ['doctor strange', 'black widow'];
``` 

### !end-question

#### !placeholder

```js
function pushFromStart(arr, start) {

}
```

#### !end-placeholder


### !tests

```js
describe('pushFromStart', function() {

    var arr1 = ['magneto', 'spiderman', 'star lord', 'wolverine', 'iron man', 'doctor strange', 'black widow'];

    it("should return an empty array when given an empty array", function() {
      expect(pushFromStart([],0)).to.be.an('array')
    })

    it("should return an empty array if the given number is greater than the greatest valid indexed", function() {
      expect(pushFromStart(['feather', 'bird'], 3)).to.eql([])
    })

    it("should return the expected array", function() {
      expect(pushFromStart(arr1, 3)).to.eql(['wolverine', 'iron man', 'doctor strange', 'black widow']);
      expect(pushFromStart(arr1, 5)).to.eql(['doctor strange', 'black widow'])
    })
  
 
})
```
### !end-tests

### !end-challenge


### !challenge

* type: code-snippet
* id: iterations-3
* language: javascript
* title: Start to End

### !question

Write a function named `startToEnd`
Given an array `arr`, a start number `start`, and an end number `end`, return a new array of every element from `start` to one before `end`.
If `end` is greater than the length of `arr`, include `undefined` for invalid index.
  

```js
  //example array
  var arr = ['magneto', 'spiderman', 'star lord', 'wolverine', 'iron man', 'doctor strange', 'black widow'];

  //Expected answer 1
  var actual = startToEnd(arr, 2, 4);
  var expected = ['star lord', 'wolverine'];

  //Expected answer 2
  var actual = startToEnd(arr, 6, 8 );
  var expected = ['black widow', undefined];

``` 

### !end-question

#### !placeholder

```js
function startToEnd(arr, start, end) {

}
```

#### !end-placeholder


### !tests

```js
describe('startToEnd', function() {

    var arr1 = ['magneto', 'spiderman', 'star lord', 'wolverine', 'iron man', 'doctor strange', 'black widow'];

    it("should return an empty array if the start number and end number are equal", function() {
      expect(startToEnd(['feather', 'bird'], 1, 1)).to.eql([])
    })

     it("should include undefined for every index beyond the length of the array", function() {
      expect(startToEnd(['feather', 'bird'], 1, 4)).to.eql(['bird', undefined, undefined])
    })

    it("should return the expected array", function() {
      expect(startToEnd([...arr1], 3, 6)).to.eql(['wolverine', 'iron man', 'doctor strange']);
      expect(startToEnd([...arr1], 5, 7)).to.eql(['doctor strange', 'black widow'])
    })
  
   it("should return an array of strings", function() {
      expect(startToEnd([...arr], 3, 6)).to.satisfy(function (arr) {
        return arr.every(el => typeof el === 'string');
      } )
    })
})
```
### !end-tests

### !end-challenge


### !challenge

* type: code-snippet
* id: iterations-4
* language: javascript
* title: Iterate By Num

### !question

Given an array or a string `data` and a number `num`, iterate over `data` from 0 by `num` and push each element or character to a new array, and return the new array. If num is less than or equal to 0, return an empty array
Return the new array.


```js

  var arr = ['meteor', 'stars', 'moon', 'comet', 'solar wind', 'pillar of god']
  var str = 'telephone';

  var actual1 = iterateByNum(arr, 3);
  var expected1 = ['meteor', 'comet'];

  var actual2 = iterateByNum(arr, 2);
  var expected2 = ['meteor', 'moon', 'solar wind'];

  var actual3 = iterateByNum(str, 4);
  var expected3 = ['t', 'p', 'e'];
``` 

### !end-question

#### !placeholder

```js
function iterateByNum(data, num) {

}
```

#### !end-placeholder


### !tests

```js
describe('iterateByNum', function() {

    var arr1 = ['magneto', 'spiderman', 'star lord', 'wolverine', 'iron man', 'doctor strange', 'black widow'];
    var arr2 = ['meteor', 'stars', 'moon', 'comet', 'solar wind', 'pillar of god'];
    var str = 'telephone';

    it("should return an array", function() {
      expect(iterateByNum([], 0)).to.be.an('array')
      expect(iterateByNum('', 0)).to.be.an('array')
    })

    it("should return a new array", function() {
      const arr = [1,2,3];
      expect(iterateByNum(arr, 2)).to.not.eq(arr);
    })


    it("should return an empty array when given an empty array or string", function() {
      expect(iterateByNum([], 0)).to.eql([])
      expect(iterateByNum('', 0)).to.eql([])
    })

    it("should work with strings and arrays", function() {
      expect(iterateByNum(['a'], 1)).to.eql(['a'])

      expect(iterateByNum('l', 1)).to.eql(['l'])
    })

    it("should return an empty array if the given number is less than or equal to 0", function() {
      expect(iterateByNum(['feather', 'bird'], 0)).to.eql([])
      expect(iterateByNum(['feather', 'bird'], -1)).to.eql([])
    })

    it("should return the expected array", function() {
      expect(iterateByNum([...arr2], 3)).to.eql(['meteor', 'comet']);
      expect(iterateByNum([...arr2], 2)).to.eql(['meteor', 'moon', 'solar wind'])
      expect(iterateByNum([...arr1], 1)).to.eql(arr1);
      expect(iterateByNum([...arr1], 20)).to.eql(['magneto']);
      expect(iterateByNum(str, 4)).to.eql(['t', 'p', 'e']);
    })
  
    it("should return an array of strings", function() {
      expect(iterateByNum([...arr1], 3, 6)).to.satisfy(function (arr) {
        return arr.every(el => typeof el === 'string');
      } )
    })

})
```
### !end-tests

### !end-challenge


### !challenge

* type: code-snippet
* id: iterations-5
* language: javascript
* title: First Instance

### !question

 Given a string or an array of characters `data` and a target character `target`, return the index of the first instance (starting from index 0) `target` appears in `data`. Return -1 if it is not found.
 *Do not use the 'split' method.*

```js
  var chars1 = 'find me waiting';
  var actual1 = firstInstance(data, 'i');
  var expected = 1;
  
  var chars2 = ['a', 'b', 'c', 'a', 'd', 'a', 'd', 'b', 'c'];
  var actual2 = firstInstance(chars2, 'd');
  var expected = 4;

``` 

### !end-question

#### !placeholder

```js
function firstInstance(chars, target) {

}
```

#### !end-placeholder


### !tests

```js
describe('firstInstance', function() {

    var arr1 = ['a', 'b', 'c', 'a', 'd', 'a', 'd', 'b', 'c'];
    var str1 = 'abcdef';
    var str2 = '10 20 30 40 50 50 40';

    it("should return -1 when given an empty array or an empty string as the first argument", function() {
      expect(firstInstance([],'a')).to.deep.eq(-1)
      expect(firstInstance('', 'a')).to.deep.eq(-1)
    })

   it("should work with strings and arrays", function() {
      expect(firstInstance(['l'], 'l' ), "Default value is incorrect").to.deep.eq(0)
      expect(firstInstance('l', 'l'), "Default value is incorrect").to.deep.eq(0)
    })

    it("should return -1 if the character is not found in the string", function() {
      expect(firstInstance('abc', 'f')).to.deep.eq(-1)
      expect(firstInstance(['a', 'b', 'c'], 'g')).to.deep.eql(-1)
    })

    it("should return the expected index number", function() {
      expect(firstInstance(str1, 'd')).to.deep.eq(3);
      expect(firstInstance(str2, 5)).to.deep.eq(12)
      expect(firstInstance(arr1, 'c')).to.deep.eq(2);
    })
  
})
```
### !end-tests

### !end-challenge


### !challenge

* type: code-snippet
* id: iterations-6
* language: javascript
* title: Last Instance

### !question

 Given a string or an array of characters `chars` and a target character `target`, return the index of the last instance `target` is found in `chars`. Return -1 if `target` is not found.
 Do not use the 'split' method.
  

```js
    var chars1 = 'find me waiting';
    var actual1 = lastInstance(chars1, 'i');
    var expected = 12;
  
    var chars2 = ['a', 'b', 'c', 'a', 'd', 'a', 'd', 'b', 'c'];
    var actual2 = lastInstance(chars2, 'd');
    var expected = 6;
``` 

### !end-question

#### !placeholder

```js
function lastInstance(chars, target) {

}
```

#### !end-placeholder


### !tests

```js
describe('lastInstance', function() {

    var arr1 = ['a', 'b', 'c', 'a', 'd', 'c', 'd', 'b', 'b'];
    var str1 = 'abcdefdd';
    var str2 = '10 20 30 40 50 50 40';

    it("should return -1 when given an empty array or an empty string as the first argument", function() {
      expect(lastInstance([],'a'), "Default value is incorrect").to.deep.eq(-1)
      expect(lastInstance('', 'a'), "Default value is incorrect").to.deep.eq(-1)
    })

   it("should work with strings and arrays", function() {
      expect(lastInstance(['l'], 'l' ), "Default value is incorrect").to.deep.eq(0)
      expect(lastInstance('l', 'l'), "Default value is incorrect").to.deep.eq(0)
    })

    it("should return -1 if the character is not found in the string", function() {
      expect(lastInstance('abc', 'f')).to.deep.eq(-1)
      expect(lastInstance(['a', 'b', 'c'], 'g')).to.deep.eql(-1)
    })

    it("should return the expected index number", function() {
      expect(lastInstance(str1, 'd')).to.deep.eq(7);
      expect(lastInstance(str2, 5)).to.deep.eq(15)
      expect(lastInstance(arr1, 'c')).to.deep.eql(5);
      expect(lastInstance('aaaaa', 'a')).to.deep.eql(4);
    })
  
})
```

### !end-tests

### !end-challenge


### !challenge

* type: code-snippet
* id: iterations-7
* language: javascript
* title: Two Indexes

### !question

Given a string `str` that will always contain two lower case 'x' characters, return an array containing the two indexes where the 'x' characters are found.
  

```js
  var str1 = 'aDfxkXjexty';
  var actual1 = twoIndexes(str1);
  var expected1 = [3,8];

  var str2 = 'xtestx';
  var actual2 = twoIndexes(str2);
  var expected2 = [0,5];
``` 

### !end-question

#### !placeholder

```js
function twoIndexes(str) {

}
```

#### !end-placeholder


### !tests

```js
describe('twoIndexes', function() {

    var str1 = 'aDfxkljexty';
    var str2 = 'xtestx';
    var str3 = 'xXx';

    it("should return an array", function() {
      expect(twoIndexes(str1)).to.be.an('array')
    })

    it("should return the expected index numbers", function() {
      expect(twoIndexes(str1)).to.eql([3,8]);
      expect(twoIndexes(str2)).to.eql([0,5])
      expect(twoIndexes(str3)).to.eql([0,2]);
    })

    it("should not split the string", function() {
      expect(twoIndexes(str1).toString()).to.not.include('.split');
    })
  
})
```
### !end-tests

### !end-challenge


### !challenge

* type: code-snippet
* id: iterations-8
* language: javascript
* title: Two Indexes Exclusive

### !question

  Given a string `str` that will always contain two lower case 'x' characters, return how many characters are between the x's exclusive of the start and ending 'x.'
  *note:  this problem is probably too hard for beginner*

```js
  var str1 = 'aDfxkjexty';
  var actual1 = twoIndexesExclusive(str1);
  var expected1 = 3;

  var str2 = 'xtestx';
  var actual2 = twoIndexesExclusive(str2);
  var expected2 = 4
``` 

### !end-question

#### !placeholder

```js
function twoIndexesExclusive(str) {

}
```

#### !end-placeholder


### !tests

```js
describe('twoIndexesExclusive', function() {

    var str1 = 'aDfxklexty';
    var str2 = 'xtestx';
    var str3 = 'xXx';
    var str4 = 'xx';

    it("should return a number", function() {
      expect(twoIndexesExclusive(str1)).to.be.a('number')
    })

    it("should return the correct number of characters between the lower case 'x' characters", function() {
      expect(twoIndexesExclusive(str1)).to.deep.eq(3);
      expect(twoIndexesExclusive(str2)).to.deep.eq(4)
      expect(twoIndexesExclusive(str3)).to.deep.eq(1);
      expect(twoIndexesExclusive(str4)).to.deep.eq(0);
    })

    it("should not use the split method", function() {
      expect(twoIndexesExclusive.toString()).to.not.include('.split');
    })

})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: iterations-9
* language: javascript
* title: Every Char Match

### !question

  Given a string or an array of characters `chars` and a target character `target`, return true if every character in `chars` matches `target` or false if any characters do nto match `target`.
  

```js
    var chars1 = 'xxxxxx';
    var actual1 = everyCharMatch(chars1, 'x');
    var expected1 = true;
    
    var chars2 = 'xlxouixkx';
    var actual2 = everyCharMatch(chars2, 'x');
    var expected2 = false;
    
    var chars3 = ['x','x', 'x', 'x', 'x', 'x', 'k'];
    var actual3 = everyCharMatch(chars3, 'x');
    var expected3 = false;
``` 

### !end-question

#### !placeholder

```js
function everyCharMatch(chars, target) {

}
```

#### !end-placeholder


### !tests

```js
describe('everyCharMatch', function() {

    var chars1 = 'xxxxxx';
    var chars2 = 'xlxouixkx';
    var chars3 = ['x','x', 'x', 'x', 'x', 'x', 'k'];

    it("should return a boolean", function() {
      expect(everyCharMatch('x', 'x')).to.be.a('boolean')
      expect(everyCharMatch('a', 'x')).to.be.a('boolean')
    })

    it("should return the expected boolean value", function() {
      expect(everyCharMatch(chars1, 'x')).to.deep.eq(true)
      expect(everyCharMatch(chars2, 'k')).to.deep.eq(false);
      expect(everyCharMatch(chars3, 'x')).to.deep.eq(false);
      expect(everyCharMatch(['f', 'f', 'f'], 'f')).to.deep.eq(true);
      expect(everyCharMatch('aaa', 'e')).to.deep.eq(false);
    })

    it("should not use the split method", function() {
      expect(everyCharMatch.toString()).to.not.include('.split');
    })
  
})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: iterations-10
* language: javascript
* title: Every Other Char Match

### !question

    Given a string or an array of characters `chars` and a target character `target`, return true if every other character (starting from index 0) in `chars` matches `target`, or false if a character does not match.
  

```js
    var chars1 = 'xxxxxx';
    var actual1 = everyOtherCharMatch(chars1, 'x');
    var expected1 = true;
    
    var chars2 = 'xlxouixkx';
    var actual2 = everyOtherCharMatch(chars2, 'x');
    var expected2 = false;
    
    var chars3 = ['x','x', 'x', 'x', 'x', 'k', 'x'];
    var actual3 = everyOtherCharMatch(chars3, 'x');
    var expected3 = true;
``` 

### !end-question

#### !placeholder

```js
function everyOtherCharMatch(chars, target) {

}
```

#### !end-placeholder


### !tests

```js
describe('everyOtherCharMatch', function() {

    var chars1 = 'xxxxxx';
    var chars2 = 'xlxouixkx';
    var chars3 = ['x','x', 'x', 'x', 'x', 'k', 'x'];

    it("should return a boolean", function() {
      expect(everyOtherCharMatch('x', 'x')).to.be.a('boolean')
      expect(everyOtherCharMatch('a', 'x')).to.be.a('boolean')
    })

    it("should return the expected boolean value", function() {
      expect(everyOtherCharMatch(chars1, 'x')).to.deep.eq(true)
      expect(everyOtherCharMatch(chars2, 'k')).to.deep.eq(false);
      expect(everyOtherCharMatch(chars3, 'x')).to.deep.eq(true);
      expect(everyOtherCharMatch(['f', 'a', 'f'], 'f')).to.deep.eq(true);
      expect(everyOtherCharMatch('aaa', 'e')).to.deep.eq(false);
    })
  
})
```
### !end-tests

### !end-challenge

   

### !challenge

* type: code-snippet
* id: iterations-11
* language: javascript
* title: Code Everyday

### !question

    Given a number `num` that is greater than or equal to 0, push the message 'I code everyday' into a new array as many times as the number.
    Return the new array.
  

```js

   var num = 5;
   var actual = codeEveryday(num);
   var expected = ['I code everyday', 'I code everyday', 'I code everyday', 'I code everyday', 'I code everyday'];

``` 

### !end-question

#### !placeholder

```js
function codeEveryday(num) {

}
```

#### !end-placeholder


### !tests

```js
describe('codeEveryDay', function() {

    it("should return an array", function() {
      expect(codeEveryday(1)).to.be.an('array')
    })

    it("should return an array containing the phrase the correct number of times if given a positive number", function() {
      expect(codeEveryday(2)).to.eql(['I code everyday', 'I code everyday'])
      expect(codeEveryday(5)).to.eql(['I code everyday', 'I code everyday', 'I code everyday', 'I code everyday', 'I code everyday']);
      expect(codeEveryday(3)).to.eql(['I code everyday', 'I code everyday', 'I code everyday']);
    })

    it("should return an empty array if the given number is 0", function() {
        expect(codeEveryday(0)).to.eql([]);
    })
  
})
```
### !end-tests

### !end-challenge


### !challenge

* type: code-snippet
* id: iterations-12
* language: javascript
* title: Sum Pairs

### !question

  Given an array of numbers `arr` containing an even number of elements, sum every two elements and push the numbers into a new array.
  Note: The new array should have half the length of the passed in array.
  

```js

  var nums1 = [1,2,3,4,5,6];
  var actual1 = sumPairs(nums1);
  var expected1 = [3,7,11];

  var nums2 = [1,1];
  var actual2 = sumPairs(nums2);
  var expected2 = [2];

``` 

### !end-question

#### !placeholder

```js
function sumPairs(arr) {

}
```

#### !end-placeholder


### !tests

```js
describe('sumPairs', function() {


    it("should return an array", function() {
      expect(sumPairs([1,1])).to.be.an('array')
    })

    it("should return an empty array if given array is empty", function() {
      expect(sumPairs([])).to.eql([]);
    })

    it("should return the expected array", function() {
      expect(sumPairs([1,1])).to.eql([2])
      expect(sumPairs([1,2,3,4,5,6])).to.eql([3,7,11]);
      expect(sumPairs([0,0,0,0])).to.eql([0,0]);
      expect(sumPairs([-1, 0, 5, 10, -9, 10, 11, 11])).to.eql([-1, 15, 1, 22]);
    })
  
})
```
### !end-tests

### !end-challenge


