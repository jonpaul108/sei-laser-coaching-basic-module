describe("firstAndThird", function () {
  it("should return a string", function () {
    expect(firstAndThird("hello")).to.be.a("string");
    expect(firstAndThird("jumanji")).to.be.a("string");
  });

  it("should return the correct string", function () {
    expect(firstAndThird("hello")).to.deep.eq("hl");
    expect(firstAndThird("jumanji")).to.deep.eq("jm");
    expect(firstAndThird("worth")).to.deep.eq("wr");
    expect(firstAndThird("tell")).to.deep.eq("tl");
    expect(firstAndThird("scary")).to.deep.eq("sa");
  });

  it("should not split the string", function () {
    expect(firstAndThird("hello").toString()).to.not.include(".split");
  });

  it("should not iterate", function () {
    expect(firstAndThird("hello").toString()).to.not.include("for");
  });
});


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

describe("sumIndex", function () {
  it("should return a number", function () {
    expect(sumIndex("hello")).to.be.a("number");
  });

  it("should return the correct character", function () {
    expect(sumIndex("hello")).to.deep.eq(10);
    expect(sumIndex("s")).to.deep.eq(0);
    expect(sumIndex("str1")).to.deep.eq(6);
  });

  it("should not split the string", function () {
    expect(lengthAsIndex.toString()).to.not.include(".split");
  });
});


describe("isMirror", function () {
  it("should return a boolean", function () {
    expect(isMirror("hello", 'olleh')).to.be.a("boolean");
  });

  it("should return true if `str2` is a reversed copy of `str1`", function () {
    expect(isMirror("hello", "olleh")).to.deep.eq(true);
    expect(isMirror("s", "s")).to.deep.eq(true);
    expect(isMirror("str1", "trs1")).to.deep.eq(false);
  });

  it("should return false if `str2` is not a reversed copy of `str1`", function () {
    expect(isMirror("hello", "oll")).to.deep.eq(false);
    expect(isMirror("s", "a")).to.deep.eq(false);
    expect(isMirror("str1", "trs1")).to.deep.eq(false);
  });
});




describe("hiddenWord", function () {
   
   it("should return a string", function () {
     expect(hiddenWord("hello", [0,1])).to.be.a("string");
   });

   it("should return the correct word", function () {
     expect(hiddenWord("lejfmdofne2", [0, 1, 4, 6, 8])).to.deep.eq("lemon");
     expect(hiddenWord("inner till gift", [6, 0, 11, 3, 4])).to.deep.eq(
       "tiger"
     );
     expect(hiddenWord("same", [1, 2])).to.deep.eq("am");
   });
 });