describe("pushEveryIndex", function () {
  it("should return an empty array when given an empty array", function () {
    expect(pushEveryIndex([])).to.be.an("array");
  });

  it("should return an array of elements having form index-colon-word", function () {
    expect(pushEveryIndex(["turtle", "fox", "wolf"])).to.eql([
      "0: turtle",
      "1: fox",
      "2: wolf",
    ]);
    expect(pushEveryIndex(["mouse", "cow", "wolf", "dog"])).to.eql([
      "0: mouse",
      "1: cow",
      "2: wolf",
      "3: dog",
    ]);
  });

  it("should return an array of strings", function () {
    expect(pushEveryIndex(["salad"])).to.satisfy(function (arr) {
      return arr.every((el) => {
        return typeof el === "string";
      });
    });
  });
});


describe("pushFromStart", function () {
  var arr1 = [
    "magneto",
    "spiderman",
    "star lord",
    "wolverine",
    "iron man",
    "doctor strange",
    "black widow",
  ];

  it("should return an empty array when given an empty array", function () {
    expect(pushFromStart([], 0)).to.be.an("array");
  });

  it("should return an empty array if the given number is greater than the greatest valid indexed", function () {
    expect(pushFromStart(["feather", "bird"], 3)).to.eql([]);
  });

  it("should return the expected array", function () {
    expect(pushFromStart(arr1, 3)).to.eql([
      "wolverine",
      "iron man",
      "doctor strange",
      "black widow",
    ]);
    expect(pushFromStart(arr1, 5)).to.eql(["doctor strange", "black widow"]);
  });

});


describe("startToEnd", function () {
  var arr1 = [
    "magneto",
    "spiderman",
    "star lord",
    "wolverine",
    "iron man",
    "doctor strange",
    "black widow",
  ];

  it("should return an empty array if the start number and end number are equal", function () {
    expect(startToEnd(["feather", "bird"], 1, 1)).to.eql([]);
  });

  it("should include undefined for every index beyond the length of the array", function () {
    expect(startToEnd(["feather", "bird"], 1, 4)).to.eql([
      "bird",
      undefined,
      undefined,
    ]);
  });

  it("should return the expected array", function () {
    expect(startToEnd([...arr1], 3, 6)).to.eql([
      "wolverine",
      "iron man",
      "doctor strange",
    ]);
    expect(startToEnd([...arr1], 5, 7)).to.eql([
      "doctor strange",
      "black widow",
    ]);
  });


});


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

describe("everyOtherCharMatch", function () {
  var chars1 = "xxxxxx";
  var chars2 = "xlxouixkx";
  var chars3 = ["x", "x", "x", "x", "x", "k", "x"];

  it("should return a boolean", function () {
    expect(everyOtherCharMatch("x", "x")).to.be.a("boolean");
    expect(everyOtherCharMatch("a", "x")).to.be.a("boolean");
  });

  it("should return the expected boolean value", function () {
    expect(everyOtherCharMatch(chars1, "x")).to.deep.eq(true);
    expect(everyOtherCharMatch(chars2, "k")).to.deep.eq(false);
    expect(everyOtherCharMatch(chars3, "x")).to.deep.eq(true);
    expect(everyOtherCharMatch(["f", "a", "f"], "f")).to.deep.eq(true);
    expect(everyOtherCharMatch("aaa", "e")).to.deep.eq(false);
  });
});

describe('codeEveryday', function() {

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