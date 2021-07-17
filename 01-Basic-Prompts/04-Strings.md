# Strings

An often forgotten topic is strings. Strings are a useful type for data ["that can be represented in text form"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String). This lesson will give you plenty of review practice to get you back up to speed on your string understanding.

### Objectives 
By the end of this lesson you should have reviewed:
- concatenation 
- string access
- string iteration
- string comparisons



##

### !challenge

* type: code-snippet
* id: strings-1
* language: javascript
* title: First And Third

### !question

`FirstAndThird` takes in a string and returns a the first and third character combined into a single string.  
*Do not split or iterate to solve this prompt.*
        
 

```js

    var str1 = 'angel';
    var actual = firstAndThird(str1);
    var expected = 'ag';
  
``` 

### !end-question

#### !placeholder

```js
function firstAndThird(str) {


}
```

#### !end-placeholder


### !tests

```js
describe('firstAndThird', function() {

    it("should return a string", function() {
      expect(firstAndThird('hello')).to.be.a('string');
      expect(firstAndThird('jumanji')).to.be.a('string');
    })

    it("should return the correct string", function() {
      expect(firstAndThird('hello')).to.deep.eq('hl');
      expect(firstAndThird('jumanji')).to.deep.eq('jm');
      expect(firstAndThird('worth')).to.deep.eq('wr');
      expect(firstAndThird('tell')).to.deep.eq('tl');
      expect(firstAndThird('scary')).to.deep.eq('sa');
    })

    it("should not split the string", function() {
     expect(firstAndThird('hello').toString()).to.not.include('.split');    
    })

    it("should not iterate", function() {
     expect(firstAndThird('hello').toString()).to.not.include('for');   
    })

})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: strings-2
* language: javascript
* title: lengthOfStringsMultiplied

### !question

Given two strings, return their lengths multiplied together.

 

```js

  var actual = lengthOfStringsMultiplied('cat', 'mat');
  var expected = 9;
        
``` 

### !end-question

#### !placeholder

```js
function lengthOfStringsMultiplied(str1, str2) {


}
```

#### !end-placeholder


### !tests

```js
describe('lengthOfStringsMultiplied', function() {

    it("should return a number", function() {
      expect(firstAndThird('hello', 'hello')).to.be.a('number');
    })

    it("should return the correct number", function() {
      expect(lengthOfStringsMultiplied('hello', 'hello')).to.deep.eq(25);
      expect(lengthOfStringsMultiplied('cash', 'money')).to.deep.eq(20);
      expect(lengthOfStringsMultiplied('a','b')).to.deep.eq(1);
    })

    it("should not split the string", function() {
     expect(lengthOfStringsMultiplied('hello').toString()).to.not.include('.split');    
    })

    it("should not iterate", function() {
     expect(lengthOfStringsMultiplied.toString()).to.not.include('for');   
    })

})
```
### !end-tests

### !end-challenge


### !challenge

* type: code-snippet
* id: strings-3
* language: javascript
* title: Length As Index

### !question

`LengthAsIndex` takes in two strings, `str1` and `str2`. Return the character of `str1` that exists at the index matching the length of `str2`. The length of`str1` will always be greater than the length of `str2`

 

```js

    var actual = lengthAsIndex('cyclone', 'chair');
    var expected = 'n'; 
        
``` 

### !end-question

#### !placeholder

```js
function lengthAsIndex(str1, str2) {


}
```

#### !end-placeholder


### !tests

```js
describe("lengthAsIndex", function () {
  
  it("should return a string", function () {
    expect(lengthAsIndex("hello", "hell")).to.be.a("string");
  });

  it("should return the character of str1 found at the length of str2", function () {
    expect(lengthAsIndex("hello", "hell")).to.deep.eq("o");
    expect(lengthAsIndex("cash", "mo")).to.deep.eq("s");
    expect(lengthAsIndex("ab", "b")).to.deep.eq("b");
  });

  it("should not split the string", function () {
    expect(lengthAsIndex("hello", "h").toString()).to.not.include(".split");
  });

  it("should not iterate", function () {
    expect(lengthAsIndex.toString()).to.not.include("for");
  });
});
```
### !end-tests

### !end-challenge


### !challenge

* type: code-snippet
* id: strings-4
* language: javascript
* title: Sum Index

### !question

Given a string, return the sum of the indexes.


```js

  var actual1 = sumIndex('s');
  var expected1 = 0;

  var actual2 = sumIndex('str');
  var expected2 = 3;

  var actual3 = sumIndex('str1');
  var expected3 = 6;
      
        
``` 

### !end-question

#### !placeholder

```js
function sumIndex(str) {


}
```

#### !end-placeholder


### !tests

```js
describe('sumIndex', function() {

    it("should return a number", function() {
      expect(sumIndex('hello')).to.be.a('number');
    })

    it("should return the correct character", function() {
      expect(sumIndex('hello')).to.deep.eq(10);
      expect(sumIndex('s')).to.deep.eq(0);
      expect(sumIndex('str1')).to.deep.eq(6);
    })

    it("should not split the string", function() {
     expect(lengthAsIndex.toString()).to.not.include('.split');    
    })

})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: strings-5
* language: javascript
* title: Is Mirror

### !question

Given two strings `str1` and `str2`, return true if `str2` is the reverse of `str1`, and false if not. 



```js

  var actual1 = isMirror('hello', 'olleh');
  var expected1 = true;

  var actual2 = isMirror('str', 'tsr');
  var expected2 = false;

  var actual3 = isMirror('s', 's');
  var expected3 = true;
      
        
``` 

### !end-question

#### !placeholder

```js
function isMirror(str1, str2) {


}
```

#### !end-placeholder


### !tests

```js
describe('isMirror', function() {

    it("should return a boolean", function() {
      expect(isMirror('hello', 'olleh')).to.be.a('boolean');
    })

    it("should return true if `str2` is a reversed copy of `str1`", function() {
      expect(isMirror('hello', 'olleh')).to.deep.eq(true);
      expect(isMirror('s', 's')).to.deep.eq(true);
      expect(isMirror('str1', 'trs1')).to.deep.eq(false);
    })

    it("should return false if `str2` is not a reversed copy of `str1`", function() {
      expect(isMirror('hello', 'oll')).to.deep.eq(false);
      expect(isMirror('s', 'a')).to.deep.eq(false);
      expect(isMirror('str1', 'trs1')).to.deep.eq(false);
    })

})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: strings-6
* language: javascript
* title: Hidden Word

### !question

Given a string `str` and an array of index numbers `indexes`, use the index numbers to combine characters in the string into a new word. 
The indexes are in order from left to right.



```js



  var actual1 = hiddenWord( 'lejfmdofne2', [0,1,4,6,8]);
  var expected = 'lemon';

  var actual2 = hiddenWord( 'inner till gift', [6, 0, 11, 3, 4]);
  var expected2 = 'tiger';

  var actual3 = hiddenWord('same', [1,2]);
  var expected3 = 'am';
      
        
``` 

### !end-question

#### !placeholder

```js
function hiddenWord(str, indexes) {


}
```

#### !end-placeholder


### !tests

```js
describe("hiddenWord", function () {
   
   it("should return a string", function () {
     expect(hiddenWord("hello", [0,1])).to.be.a("string");
   });

   it("should return the correct word", function () {
     expect(hiddenWord("lejfmdofne2", [0, 1, 4, 6, 8])).to.deep.eq("lemon");
     expect(hiddenWord("inner till gift", [6, 0, 11, 3, 4])).to.deep.eq("tiger");
     expect(hiddenWord("same", [1, 2])).to.deep.eq("am");
   });

 });
```
### !end-tests

### !end-challenge

