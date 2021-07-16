


describe("fallbackKey", function () {
  var obj1 = {
    Ted: "Douglas Adams",
    Angela: "Toni Morrison",
    Jessy: "Isabel Allende",
  };

  it("should return the value found at 'key' if in the given object", function () {
    expect(
      fallbackKey(
        {
          key: "hello",
        },
        "k"
      )
    ).to.deep.eq("hello");

    expect(
      fallbackKey(
        {
          ke: "k",
          e: "e",
          key: "key",
        },
        "ke"
      )
    ).to.deep.eq("key");
  });

  it("should return the value found at the prop if 'key' is not a property", function () {
    expect(
      fallbackKey(
        {
          world: "hello",
          supper: "time to eat",
        },
        "world"
      )
    ).to.deep.eq("hello");

    expect(fallbackKey(obj1, "Ted")).to.deep.eq("Douglas Adams");
  });

});

  

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
      expect(func).to.not.include('for');
      expect(func).to.not.include('Object.keys');
      expect(func).to.not.include("Object.values");
    })

  })
  

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


describe('anyObject', function () {

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
      { a: 'test' },
      {}
    ]


    it("should return a boolean", function () {
      expect(anyObject([...arr], 'really')).to.be.a('boolean');
      expect(anyObject([...arr], 'French')).to.be.a('boolean');
    })

    it("should return the correct boolean", function () {
      expect(anyObject([...arr], 'really')).to.deep.eq(true);
      expect(anyObject([...arr], 'wanna')).to.deep.eq(true);
      expect(anyObject([...arr], 'zigazig')).to.deep.eq(true);
      expect(anyObject([...arr2], 'a')).to.deep.eq(true);
      expect(anyObject([...arr2], 'b')).to.deep.eq(false);
    })

    it("should not use Object.keys or Object.values", function () {
      expect(everyObject([...arr], 'a', 'b').toString()).to.not.include('Object.keys');
      expect(everyObject([...arr], 'a', 'b').toString()).to.not.include('Object.values');
    })

  });

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
      expect(onlyOne([...arr], 'really')).to.be.a('boolean');
      expect(onlyOne([...arr], 'French')).to.be.a('boolean');
    })

    it("should return the correct boolean", function() {
      expect(onlyOne([...arr], 'really')).to.deep.eq(false);
      expect(onlyOne([...arr], 'wanna')).to.deep.eq(true);
      expect(onlyOne([...arr], 'zigazig')).to.deep.eq(true);
      expect(onlyOne([...arr2], 'a')).to.deep.eq(true);
      expect(onlyOne([...arr2], 'b')).to.deep.eq(false);
    })

    it("should not use Object.keys or Object.values", function() {
     expect(onlyOne([...arr], 'a', 'b').toString()).to.not.include('Object.keys'); 
     expect(onlyOne([...arr], 'a', 'b').toString()).to.not.include('Object.values');     
    })

})