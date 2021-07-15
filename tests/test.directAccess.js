describe("givenIndex", function () {
  it("should return a string", function () {
    expect(givenIndex("aa", 1)).to.be.a("string");
  });

  it("should return the expected character", function () {
    expect(givenIndex("easy goes it", 6)).to.deep.equal("o");
    expect(givenIndex("Tribe", 0), 0).to.deep.equal("T");
  });

  it("should not iterate", function () {
    expect(givenIndex.toString()).to.not.include("for");
  });

  it("should not split the given string", function () {
    expect(givenIndex.toString()).to.not.include(".split");
  });
});



describe("givenIndex", function () {
  it("return type should be a string", function () {
    expect(givenIndex2(["a", "a"], 1)).to.be.a("string");
  });

  it("should return the expected character", function () {
    expect(givenIndex2(["easy", "goes", "it"], 2)).to.deep.eq("it");
    expect(givenIndex2(["Tribe"], 0)).to.deep.eq("Tribe");
  });

  it("should not iterate", function () {
    expect(givenIndex2.toString()).to.not.include("for");
  });
});

describe("objectAccess", function () {
  it("should return the expected value", function () {
    expect(
      objectAccess({ a: "gym", b: "pizzaria", c: "shops" }, "a")
    ).to.deep.eq("gym");
    expect(
      objectAccess(
        { call: "phone", text: "cellphone", browse: "internet" },
        "browse"
      )
    ).to.deep.eq("internet");
  });

  it("should not iterate", function () {
    expect(objectAccess.toString()).to.not.include("for");
  });

  it('should not use methods "Object.keys" or "Object.values"', function () {
    expect(objectAccess.toString()).to.not.include("Object.keys");
    expect(objectAccess.toString()).to.not.include("Object.values");
  });
});

describe("longerWord", function () {
  var arr1 = ["splendid", "ski", "hammer", "giant", "liquids"];
  var arr2 = ["factory", "track", "helmet", "nail"];

  it("should return a number", function () {
    expect(longerWord(arr1, 3, 0)).to.be.a("number");
  });

  it("should return the expected index", function () {
    expect(longerWord(arr1, 1, 2)).to.deep.eq(2);
    expect(longerWord(arr1, 1, 4)).to.deep.eq(4);
    expect(longerWord(arr2, 0, 1)).to.deep.eq(0);
    expect(longerWord(arr2, 3, 2)).to.deep.eq(2);
  });

  it("should not iterate", function () {
    expect(longerWord.toString()).to.not.include("for");
  });
});