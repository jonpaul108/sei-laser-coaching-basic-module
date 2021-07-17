

# Objects

This set of prompts focuses on working with objects. By manipulating data from object literals based on given arguments, you will show your capabilities through:
- Comprehension of prompt directions using instructions and inputs/outputs
- Correct application of dot/bracket notation
- Solving complex objects without the use of 'for...in' iterations or built in methods
- An accurate understanding of object and array differences
- Nested structure traversal 
  
### Before you get started
This unit builds directly from the last unit. If you would like to review dot/bracket notation through some simpler challenges, the previous unit provides some prompts serving as a review.

Finally, *you should not loop over objects to solve these prompts*. To be specific, some of these prompts may require looping over strings or arrays. *Looping over arrays and strings is often valid.* However, *looping over objects is seldom necessary and therefore amounts to an anti-pattern*. This means you should not loop over any objects to access properties within this practice curriculum, both in this unit and beyond. Furthermore, the use of methods that also loop over objects, including Object.keys and Object.values, should not be implemented.
*It is not typical to loop over an object* in the real world. If you loop, you may still pass some of the prompts or some of the tests, however, it is important you rework such solutions to remove looping over objects
  ### !challenge

* type: code-snippet
* id: objects-1
* language: javascript
* title: Fallback Key

### !question


Given an object `obj` and a key string `prop`, if the string 'key' is a key on the object, return the value found at 'key.' Otherwise, return the value found at `prop`. Assume either `'key'` or `prop` will always exist on the object.

```js

  var obj1 = {
    k: 'k',
    e: 'e',
    y:'y',
    key: 'has key';
  }
  
  var key1 = 'k';
  var actual1 = fallbackKey(obj1, key1);
  var expected2 = 'has key';
  
  var obj2 = {
    Ted: 'Douglas Adams',
    Angela: 'Toni Morrison',
    Jessy: 'Isabel Allende'
  }
  var key2 = 'Ted';
  var actual2 = fallbackKey(obj2, 'Ted');
  var expected2 = 'Douglas Adams';
``` 

### !end-question

#### !placeholder

```js
function fallbackKey(obj, prop) {

}
```

#### !end-placeholder


### !tests

```js
describe('fallbackKey', function() {

   var obj1 = {
    Ted: 'Douglas Adams',
    Angela: 'Toni Morrison',
    Jessy: 'Isabel Allende'
  }

  
    it("should return the value found at 'key' if in the given object", function() {
      expect(fallbackKey({
        key: 'hello'
      },'k')).to.deep.eq('hello');

      expect(fallbackKey({
        ke: 'k',
        e: 'e',
        key: 'key'
      },'ke')).to.deep.eq('key');
      
    })

     it("should return the value found at the prop if 'key' is not a property", function() {
      expect(fallbackKey({
        world: 'hello',
        supper: 'time to eat'
      },'world')).to.deep.eq('hello');

      expect(fallbackKey(obj1,'Ted')).to.deep.eq('Douglas Adams');

    })


})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: objects-2
* language: javascript
* title: String Or Array Of Nums

### !question


`stringOrArrayOfNums` takes in an object `obj` and a string `myKey`. The key either references an array of numbers or a string. If the key is a string, return it. If it is an array, sum the numbers and return the total as a string.

Hint: search "MDN toString" for a helpful method if you need help converting a number to a string

```js
   var obj = {
      a: [1, 2, 3, 4],
      b: '12',
      c: [10,20,30,40],
      d: '101'
    }
    
    var actual = stringOrArrayOfNums(obj, 'a'); 
    var expected = '10';
    var actual2 = stringOrArrayOfNums(obj, 'd');
    var expected = '101';
``` 

### !end-question

#### !placeholder

```js
function stringOrArrayOfNums(obj, myKey) {

}
```

#### !end-placeholder


### !tests

```js
describe('stringOrArrayOfNums', function() {

   var obj1 = {
      a: [1, 2, 3, 4],
      b: '12',
      c: [10,20,30,40],
      d: '101'
    }

    var obj1 = {
      a: [1, 2, 3, 4],
      b: '12',
      c: [10,20,30,40],
      d: '101'
    };

    var obj2 = {
      tables: '20',
      chairs: [4, 10, 3]
    }

  
    it("should return a string", function() {
      expect(stringOrArrayOfNums({
        a: '100'
      },'a')).to.be.a('string');
      
    })

  

     it("should return a the correct sum as a string when value is an array", function() {
      expect(stringOrArrayOfNums(obj1,'a')).to.deep.eq('10');

      expect(stringOrArrayOfNums(obj1,'c')).to.deep.eq('100');

      expect(stringOrArrayOfNums(obj2, 'chairs')).to.deep.eq('17');

    })

    it("should return the correct string when the value is a string", function() {
      expect(stringOrArrayOfNums(obj1,'b')).to.deep.eq('12');

      expect(stringOrArrayOfNums(obj1,'d')).to.deep.eq('101');

      expect(stringOrArrayOfNums(obj2, 'tables')).to.deep.eq('20');
    })

})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: objects-3
* language: javascript
* title: Combine Properties

### !question


  Give an object with numbers as values and two keys as strings, create a new property by combining the keys (key1 + key2) and summing the values, then return the given object. 
  - The new key should be the combined keys. 
  - The new value is the sum.

  **Best Practices Note: Generally, it is considered bad form to mutate an array or object received as an argument. However, the focus of this problem is on accessing and assigning new properties. It is acceptable in this problem for the sake of learning and practice. For more info, read here: https://blog.sapegin.me/all/avoid-mutation/. Don't worry if you don't fully understand the explanation. It would be a great concept to discuss with your coach.


```js

  var obj = {
        a: 10,
        b: 3,
        c: 8,
        d: 7
      };
  var actual = sumTwoNumbers(obj, 'a', 'b');
  var expected = {
        a: 10,
        b: 3,
        c: 8,
        d: 7,
        ab: 13
      };
      
``` 

### !end-question

#### !placeholder

```js
function combineProperties(obj, key1, key2) {

  return obj;
}
```

#### !end-placeholder


### !tests

```js
describe('combineProperties', function() {

    var obj1 = {
        a: 10,
        b: 3,
        c: 8,
        d: 7
      };

    var obj2 = {
      num1: 100,
      num2: -50,
      num3: 60
    }





    it("should retun an object", function() {
      var obj = {...obj1};
      expect(combineProperties(obj, 'a', 'b') ).to.be.an('object')
    })

    it("should return the given object", function() {
      var obj = {...obj1};
      expect(combineProperties(obj, 'a', 'b') ).to.eq(obj)
    })

     it("should add the correct expected property", function() {

       const testObj1 = combineProperties({...obj1},'a', 'b');
       const testObj2 = combineProperties({...obj2},'num1', 'num3');

       expect(testObj1).to.have.property('ab');
       expect(testObj2).to.have.property('num1num3');

    })


    it("should have the correct number of properties", function() {

      const keys1 = Object.keys(combineProperties({...obj1}, 'a', 'b' ));
      const keys2 = Object.keys(combineProperties({...obj2}, 'num1', 'num3'));
        
      expect(keys1).to.have.lengthOf(5);
      expect(keys2).to.have.lengthOf(4);

    })

    it("should not loop over an object", function() {
      const func = combineProperties({...obj1},'a', 'b').toString();
   expect(func).to.not.include('Object.keys');
      expect(func).to.not.include("Object.values");
    })

})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: objects-4
* language: javascript
* title: Where is World

### !question


  Given two objects (`obj1` and `obj2`) that both have a property 'hello', return `1` if `obj1`  has 'world' as the value, 2 if the second object has 'world', and -1 if neither have 'world' as a value.
  Only one or neither object will have 'world' as the value at 'hello'.
        
 

```js

   var obj1 = {
      test: 'jumping jacks',
      hello: 'world',
      bees: 'sting',
      answer: 'world'
    };
    
    var obj2 = {
      jet: 'stream',
      pillow: 'sleep',
      hello: 'hey',
      yo: 'world'
    }
    
    var actual = whereIsWorld(obj1, obj2);
    var expected = 1;
      
``` 

### !end-question

#### !placeholder

```js
function whereIsWorld(obj1, obj2) {


}
```

#### !end-placeholder


### !tests

```js
describe('whereIsWorld', function() {

    const obj1 = {
      test: 'jumping jacks',
      hello: 'world',
      bees: 'sting',
      answer: 'world'
    };
    
    const obj2 = {
      jet: 'stream',
      pillow: 'sleep',
      hello: 'hey',
      yo: 'world'
    }

    const obj3 = {hello: 'not world'};
    const obj4 = {hello: 'other', freeze: 'tag'};

    it("should return a number", function() {
      expect(whereIsWorld({...obj1}, {...obj2})).to.be.a('number');
    })

    it("should return -1 if 'world' is not found at property 'hello'", function() {
 
      expect(whereIsWorld({...obj3},{...obj4})).to.deep.eq(-1);

    })


    it("should return the correct number", function() {
        
      expect(whereIsWorld({...obj1}, {...obj2})).to.deep.eq(1);
      expect(whereIsWorld({...obj3}, {...obj1})).to.deep.eq(2);

    })

})
```
### !end-tests

### !end-challenge


### !challenge

* type: code-snippet
* id: objects-5
* language: javascript
* title: Every Object 

### !question

  Given an array of objects `arr` and a key `term`, return true if every object has the given term as a key and false if not. 
        
 

```js

   var arr = [
      {
        'if': 'you',
        really: 'wanna',
        be: 'my',
        'get': 'with',
        my: 'friend'
      },
      {
        I: 'really',
        really: 'really',
        wanna: 'say'
      },
      {
        zigazig: 'ah',
        what: 'I',
        want: 'really',
        really: 'want',
        my: 'friend'
      },
    ]
        
    var actual1 = everyObject(arr, 'really');
    var expected = true;
    var actual2 = everyObject(arr, 'wanna');
    var expected2 = false;
    
      
``` 

### !end-question

#### !placeholder

```js
function everyObject(arr, term) {


}
```

#### !end-placeholder


### !tests

```js
describe('everyObject', function() {

    var arr = [
      {
        'if': 'you',
        really: 'wanna',
        be: 'my',
        'get': 'with',
        my: 'friend'
      },
      {
        I: 'really',
        really: 'really',
        wanna: 'say'
      },
      {
        zigazig: 'ah',
        what: 'I',
        want: 'really',
        really: 'want',
        my: 'friend'
      },
    ]

    var arr2 = [
      {a: 'test'}
    ]


    it("should return a boolean", function() {
      expect(everyObject([...arr], 'really')).to.be.a('boolean');
       expect(everyObject([...arr], 'French')).to.be.a('boolean');
    })

    it("should return the correct boolean", function() {
 
      expect(everyObject([...arr], 'really')).to.deep.eq(true);
      expect(everyObject([...arr], 'wanna')).to.deep.eq(false);
      expect(everyObject([...arr2], 'a')).to.deep.eq(true);
      expect(everyObject([...arr2], 'b')).to.deep.eq(false);


    })


    it("should not use Object.keys or Object.values", function() {
     expect(everyObject([...arr], 'a', 'b').toString()).to.not.include('Object');   
    })

})
```
### !end-tests

### !end-challenge




### !challenge

* type: code-snippet
* id: objects-6
* language: javascript
* title: Any Object 

### !question

  Given an array of objects and a key (term), return true if any object has the given term and false if no objects have the given term. 
        
 

```js

   var arr = [
      {
        'if': 'you',
        really: 'wanna',
        be: 'my',
        'get': 'with',
        my: 'friend'
      },
      {
        I: 'really',
        really: 'really',
        wanna: 'say'
      },
      {
        zigazig: 'ah',
        what: 'I',
        want: 'really',
        really: 'want',
        my: 'friend'
      },
    ]
        
      var actual1 = anyObject(arr, 'really');
      var expected = true;

      var actual2 = anyObject(arr, 'wanna');
      var expected2 = true;

      var actual3 = anyObject(arr, 'friend');
      var expected3 = false;
      
``` 

### !end-question

#### !placeholder

```js
function anyObject(arr, term) {


}
```

#### !end-placeholder


### !tests

```js
describe('anyObject', function() {

    var arr = [
      {
        'if': 'you',
        really: 'wanna',
        be: 'my',
        'get': 'with',
        my: 'friend'
      },
      {
        I: 'really',
        really: 'really',
        wanna: 'say'
      },
      {
        zigazig: 'ah',
        what: 'I',
        want: 'really',
        really: 'want',
        my: 'friend'
      },
    ]

    var arr2 = [
      {a: 'test'},
      {}
    ]


    it("should return a boolean", function() {
      expect(anyObject([...arr], 'really')).to.be.a('boolean');
      expect(anyObject([...arr], 'French')).to.be.a('boolean');
    })

    it("should return the correct boolean", function() {
      expect(anyObject([...arr], 'really')).to.deep.eq(true);
      expect(anyObject([...arr], 'wanna')).to.deep.eq(true);
      expect(anyObject([...arr], 'zigazig')).to.deep.eq(true);
      expect(anyObject([...arr2], 'a')).to.deep.eq(true);
      expect(anyObject([...arr2], 'b')).to.deep.eq(false);
    })

    it("should not use Object.keys or Object.values", function() {
     expect(everyObject([...arr], 'a', 'b').toString()).to.not.include('Object.keys'); 
     expect(everyObject([...arr], 'a', 'b').toString()).to.not.include('Object.values');     
    })

})
```
### !end-tests

### !end-challenge



### !challenge

* type: code-snippet
* id: objects-7
* language: javascript
* title: Only One 

### !question

Given an array of objects and a key `term`, return true if only one object has the given property and false if more than one or no objects contain the term as a key.
        
 

```js

   var arr = [
      {
        'if': 'you',
        really: 'wanna',
        be: 'my',
        'get': 'with',
        my: 'friend'
      },
      {
        I: 'really',
        really: 'really',
        wanna: 'say'
      },
      {
        zigazig: 'ah',
        what: 'I',
        want: 'really',
        really: 'want',
        my: 'friend'
      },
    ]
        
    var actual1 = everyObject(arr, 'really');
    var expected = false;

    var actual2 = everyObject(arr, 'wanna');
    var expected2 = true;

    var actual3 = everyObject(arr, 'my');
    var expected3 = false;
  
``` 

### !end-question

#### !placeholder

```js
function onlyOne(arr, term) {


}
```

#### !end-placeholder


### !tests

```js
describe('onlyOne', function() {

    var arr = [
      {
        'if': 'you',
        really: 'wanna',
        be: 'my',
        'get': 'with',
        my: 'friend'
      },
      {
        I: 'really',
        really: 'really',
        wanna: 'say'
      },
      {
        zigazig: 'ah',
        what: 'I',
        want: 'really',
        really: 'want',
        my: 'friend'
      },
    ]

    var arr2 = [
      {a: 'test'},
      {}
    ]


    it("should return a boolean", function() {
      expect(anyObject([...arr], 'really')).to.be.a('boolean');
      expect(anyObject([...arr], 'French')).to.be.a('boolean');
    })

    it("should return the correct boolean", function() {
      expect(anyObject([...arr], 'really')).to.deep.eq(false);
      expect(anyObject([...arr], 'wanna')).to.deep.eq(true);
      expect(anyObject([...arr], 'zigazig')).to.deep.eq(true);
      expect(anyObject([...arr2], 'a')).to.deep.eq(true);
      expect(anyObject([...arr2], 'b')).to.deep.eq(false);
    })

    it("should not use Object.keys or Object.values", function() {
     expect(anyObject([...arr], 'a', 'b').toString()).to.not.include('Object.keys'); 
     expect(anyObject([...arr], 'a', 'b').toString()).to.not.include('Object.values');     
    })

})
```
### !end-tests

### !end-challenge

