### !challenge

* type: code-snippet
* id: strings-1
* language: javascript
* title: firstAndThird

### !question

Given a string, combine the first and third characters of the string. Return the result. 
Do not split or iterate to solve this prompt.
        
 

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
      expect(firstAndThird('hello')).to.deeply.eq('hl');
      expect(firstAndThird('jumanji')).to.deeply.eq('jm');
      expect(firstAndThird('worth')).to.deeply.eq('wr');
      expect(firstAndThird('tell')).to.deeply.eq('tl');
      expect(firstAndThird('scary')).to.deeply.eq('sa');
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
      expect(lengthOfStringsMultiplied('hello', 'hello')).to.deeply.eq(25);
      expect(lengthOfStringsMultiplied('cash', 'money')).to.deeply.eq(20);
      expect(lengthOfStringsMultiplied('a','b')).to.deeply.eq(1);
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

Given two strings, use the length of the second string as an index in the first. Return the character found at the index.

 

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
describe('lengthAsIndex', function() {

    it("should return a string", function() {
      expect(lengthAsIndex('hello', 'hello')).to.be.a('string');
    })

    it("should return the correct character", function() {
      expect(lengthAsIndex('hello', 'hell')).to.deeply.eq('o');
      expect(lengthAsIndex('cash', 'mo')).to.deeply.eq('s');
      expect(lengthAsIndex('ab','b')).to.deeply.eq('b');
    })

    it("should not split the string", function() {
     expect(lengthAsIndex('hello', 'h').toString()).to.not.include('.split');    
    })

    it("should not iterate", function() {
     expect(lengthAsIndex.toString()).to.not.include('for');   
    })

})
```
### !end-tests

### !end-challenge


### !challenge

* type: code-snippet
* id: strings-4
* language: javascript
* title: Sum Index

### !question

Given a string, return the sum of the indexes where a character can be found.



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
function sumIndex(str1, str2) {


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
      expect(sumIndex('hello')).to.deeply.eq(10);
      expect(sumIndex('s')).to.deeply.eq(0);
      expect(sumIndex('str1')).to.deeply.eq(6);
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

Given two strings, return true if the second string is a mirror of the first, and false if not.



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
      expect(isMirror('hello', )).to.be.a('boolean');
    })

    it("should return the correct character", function() {
      expect(isMirror('hello', 'olleh')).to.deeply.eq(true);
      expect(isMirror('s', 's')).to.deeply.eq(true);
      expect(isMirror('str1', 'trs1')).to.deeply.eq(false);
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

Given a string an array of index numbers, use the index numbers to combine characters in the string into a new word. 
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
describe('hiddenWord', function() {

    it("should return a string", function() {
      expect(hiddenWord('hello', )).to.be.a('string');
    })

    it("should return the correct character", function() {
      expect(hiddenWord( 'lejfmdofne2', [0,1,4,6,8])).to.deeply.eq('lemon');
      expect(hiddenWord( 'inner till gift', [6, 0, 11, 3, 4])).to.deeply.eq('tiger');
      expect(hiddenWord('same', [1,2])).to.deeply.eq('am');
    })

})
```
### !end-tests

### !end-challenge

