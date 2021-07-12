# Direct Access
  ### !challenge

* type: code-snippet
* id: direct-access-1
* language: javascript
* title: Given Index

### !question


Write a function named `Given Index`
Given a string and an index, return the character at the given index. 

```js
  var actual = givenIndex('string', 2);
  var expected = 'r';
``` 

### !end-question

#### !placeholder

```js
function givenIndex(str, ind) {

}
```

#### !end-placeholder


### !tests

```js
describe('givenIndex', function() {

  it("return type should be a string", function() {
    expect(givenIndex('aa', 1)).to.be.a('string')
  })

  it("should return the expected character", function() {
    expect(givenIndex('easy goes it', 6)).to.deeply.eq('o')
    expect(givenIndex('Tribe'), 0).to.deeply.eq('T')
  })

  it("should not iterate", function() {
    expect(givenIndex.toString()).to.not.include('for')
  })

  it("should not split the given string", function() {
    expect(funcString).to.not.include('.split');
  })

})
```
### !end-tests

### !end-challenge




### !challenge

* type: code-snippet
* id: direct-access-2
* language: javascript
* title: Given Index 2

### !question

Given an array and an index, return the word at the given index;

```js
  var actual = givenIndex2(['no', 'loop', 'necessary'], 1);
  var expected = 'loop';
``` 

### !end-question

#### !placeholder

```js
function givenIndex2(arr, ind) {

}
```

#### !end-placeholder


### !tests

```js
describe('givenIndex', function() {

    it("return type should be a string", function() {
      expect(givenIndex2(['a','a'], 1)).to.be.a('string')
    })

    it("should return the expected charcter", function() {
      expect(givenIndex2(['easy', 'goes', 'it', ], 2)).to.deeply.eq('it')
      expect(givenIndex2(['Tribe']), 0).to.deeply.eq('Tribe')
    })

    it("should not iterate", function() {
      expect(givenIndex2.toString()).to.not.include('for')
    })

  
})
```
### !end-tests

### !end-challenge








### !challenge

* type: code-snippet
* id: direct-access-3
* language: javascript
* title: Object Access

### !question

Given an object and a key (char), return the value found at the key.
  
  
```js
  
  var actual = objectAccess({a:'gym', b:'pizzaria',c:'shops'},'a');
  var expected = 'gym';

``` 

### !end-question

#### !placeholder

```js
function objectAccess(obj, char) {

}
```

#### !end-placeholder


### !tests

```js
describe('objectAccess', function() {

    it("should return the expected value", function() {
      expect(objectAccess({a:'gym', b:'pizzaria',c:'shops'},'a')).to.deeply.eq('gym');
      expect(objectAccess({'call': 'phone', 'text': 'cellphone', 'browse': 'internet'}, 'browse')).to.deeply.eq('internet')
    })

    it("should not iterate", function() {
      expect(objectAccess.toString()).to.not.include('for')
    })

    it("should not use methods \"Object.keys\" or \"Object.values\"", function() {
      expect(objectAccess.toString()).to.not.include('Object.keys')
      expect(objectAccess.toString()).to.not.include('Object.values')
    })

})
```
### !end-tests

### !end-challenge


### !challenge

* type: code-snippet
* id: direct-access-4
* language: javascript
* title: Longer Word

### !question

  Given an array of different length words and two different indexes, return the index of the word with the greater length.
  
  
```js
  
  var actual = longerWord(['splendid', 'ski', 'hammer', 'giant', 'liquids'], 3, 0);
  var expected = 0;

``` 

### !end-question

#### !placeholder

```js
function longerWord(obj, char) {

}
```

#### !end-placeholder


### !tests

```js
describe('longerWord', function() {
  var arr1 = ['splendid', 'ski', 'hammer', 'giant', 'liquids'];
  var arr2 = ['factory', 'track', 'helmet', 'nail'];

  it("should return a number", function () {
    expect(longerWord(arr1, 3, 0)).to.be.a('number');
  })

    it("should return the expected index", function() {
      expect(longerWord(str1, 1, 2)).to.deeply.eq(2);
      expect(longerWord(str1, 1, 4)).to.deeply.eq(4);
      expect(longerWord(str2, 0, 1)).to.deeply.eq(0);
      expect(longerWord(str2, 3, 2)).to.deeply.eq(2);
    })

    it("should not iterate", function() {
      expect(longerWordtoString()).to.not.include('for')
    })

})
```
### !end-tests

### !end-challenge


### !challenge

* type: code-snippet
* id: direct-access-5
* language: javascript
* title: Nested Access

### !question

Given an array of objects (arr), an index (ind) and a key (k), return the value at the key in the object existing in the array at the given index.
  
  
  
```js
  
  var actual = nestedAccess([
      {
        city: 'Paris',
        month: 'March'
      },
      {
        city: 'Amsterdam',
        month: 'October'
      },
      {
        city: 'London',
        month: 'December'
      },
    ], 2, 'month');
    var expected = 'December';

``` 

### !end-question

#### !placeholder

```js
function nestedAccess(arr, ind, k) {

}
```

#### !end-placeholder


### !tests

```js
describe('nestedAccess', function() {
  var arr1 = [
      {
        city: 'Paris',
        month: 'March'
      },
      {
        city: 'Amsterdam',
        month: 'October'
      },
      {
        city: 'London',
        month: 'December'
      },
    ];

    var arr2 =  [
      {
        day: 'Tuesday',
        item: 'milk'
      },
        {
        day: 'Wednesday',
        item: 'orange juice'
      },
      {
        day: 'Thursday',
        item: 'cereal'
      },
      {
        day: 'Friday',
        item: 'cheese'
      },
    ];


    it("should return the expected value", function() {
      expect(nestedAccess(arr1, 0, 'city')).to.deeply.eq('Paris');
      expect(nestedAccess(arr1, 2, 'month')).to.deeply.eq('December');
      expect(nestedAccess(arr2, 3, 'day')).to.deeply.eq('Friday');
      expect(nestedAccess(arr2, 1, 'item')).to.deeply.eq('orange juice');
    })

    it("should not iterate", function() {
      expect(nestedAccess.toString()).to.not.include('for')
    })

     it("should not use methods \"Object.keys\" or \"Object.values\"", function() {
      expect(nestedAccess.toString()).to.not.include('Object.keys')
      expect(nestedAccess.toString()).to.not.include('Object.values')
    })

})
```
### !end-tests

### !end-challenge
    


### !challenge

* type: code-snippet
* id: direct-access-6
* language: javascript
* title: Weather Info

### !question

Given an array of expected weather information and an index number, return the weather information found at the key 'expected weather' at the given index.
    
  
```js
  
    
    var actual = weatherInfo([
        {
          date: 'January 22nd',
          'expected weather': 'sunny',
        },
        {
          date: 'January 23rd',
          'expected weather': 'cloudy',
        },
        {
          date: 'January 24th',
          'expected weather:': 'rainy'
        }
      ], 0);
      
      var expected = 'sunny';

``` 

### !end-question

#### !placeholder

```js
function weatherInfo(weather, ind) {

}
```

#### !end-placeholder


### !tests

```js
describe('weatherInfo', function() {
  
    const arr1 = [
        {
          date: 'January 22nd',
          'expected weather': 'sunny',
        },
        {
          date: 'January 23rd',
          'expected weather': 'cloudy',
        },
        {
          date: 'January 24th',
          'expected weather:': 'rainy'
        }
      ]

    const arr2 = [
        {
          date: 'March 22nd',
          'expected weather': 'rainy',
        },
        {
          date: 'October 23rd',
          'expected weather': 'foggy',
        },
        {
          date: 'December 16th',
          'expected weather:': 'hail'
        }
    ]
    //add in checking for loops


    it("should return the expected weather information", function() {
      expect(weatherInfo(arr1, 0)).to.deeply.eq('sunny');
      expect(weatherInfo(arr1, 1)).to.deeply.eq('cloudy');
      expect(weatherInfo(arr2, 2)).to.deeply.eq('hail');
      expect(weatherInfo(arr2, 0)).to.deeply.eq('rainy');
    })

    it("should not iterate", function() {
      expect(weatherInfo.toString()).to.not.include('for')
    })

    it("should not use methods \"Object.keys\" or \"Object.values\"", function() {
      expect(weatherInfo.toString()).to.not.include('Object.keys')
      expect(weatherInfo.toString()).to.not.include('Object.values')
    })

})
```
### !end-tests

### !end-challenge



### !challenge

* type: code-snippet
* id: direct-access-7
* language: javascript
* title: sumInnerArrayNums

### !question

Given an array containing a single inner array of numbers, return the sum of the first and last numbers of the inner array.
    
   
```js
    
    var actual1 = sumInnerArrayNums([
        [9, 1, 4, 2, 6, 7]
      ]);
    var expected1 = 16;
    
    var actual2 = sumInnerArrayNums([
        [1, 5, 3]
      ]);
    var expected2 = 4;

``` 

### !end-question

#### !placeholder

```js
function sumInnerArrayNums(arr) {

}
```

#### !end-placeholder


### !tests

```js
describe('sumInnerArrayNums', function() {
  
    const arr1 = [
      [9, 1, 4, 2, 6, 7]
    ]

    const arr2 = [
      [1, 5, 3]
    ]

    const arr3 = [
      [0,0]
    ];

    const arr4 = [
      [50, 100, 3, -1000]
    ]

    //add in checking for loops
  it("should return a number", function() {
    expect(sumInnerArrayNums(arr1)).to.be.a('number');
  })

    it("should return the expected sum", function() {
      expect(sumInnerArrayNums(arr1)).to.deeply.eq(16);
      expect(sumInnerArrayNums(arr4)).to.deeply.eq(-950);
      expect(sumInnerArrayNums(arr3)).to.deeply.eq(0);
      expect(sumInnerArrayNums(arr2)).to.deeply.eq(4);
    })

  it("should not iterate", function() {
      expect(sumInnerArrayNums.toString()).to.not.include('for')
  })

})
```
### !end-tests

### !end-challenge


### !challenge

* type: code-snippet
* id: direct-access-8
* language: javascript
* title: Middle

### !question

 Given an array or string with an odd number of elements or characters, return the middle element or character.
      
  
```js
    
    var actual1 = middle([1, 6, 8]);
    var expected1 = 6;

    var actual2 = middle('villa');
    var expected2 = 'l';

``` 

### !end-question

#### !placeholder

```js
function middle(data) {

}
```

#### !end-placeholder


### !tests

```js
describe('middle', function() {
  
    const arr1 = [9, 1, 4, 2, 6]
    const arr2 = [1, 5, 8];
    const arr3 = [1, 6, 8];
    const str1 = 'villa';
    const str2 = 'prehistoric';

    const funcString = middle.toString();
  

    const arr2 = [
      [1, 5, 3]
    ]

    const arr3 = [
      [0,0]
    ];

    const arr4 = [
      [50, 100, 3, -1000]
    ]

  it("should work with input type array or string", function() {
    expect(middle([1,2,3]) === 2).to.deeply.eq(true);
    expect(middle('123') === 2).to.deeply.eq(true);
  })

  if("should not mutate a given array", function() {
    const arr1Copy = [...arr1];
    middle(arr1);
    expect(arr1).to.eql(arr1Copy);
  })

  it("should not split a given string", function() {
    expect(funcString).to.not.include('.split');
  })

  it("should return the expected sum", function() {
    expect(middle(arr3)).to.deeply.eq(6);
    expect(middle(arr1)).to.deeply.eq(4);
    expect(middle(arr4)).to.deeply.eq(5);
    expect(middle(arr3)).to.deeply.eq('l');
    expect(middle(arr2)).to.deeply.eq('s');
  })


  it("should not iterate", function() {
    expect(funcString).to.not.include('for')
  })

  

})
```
### !end-tests

### !end-challenge