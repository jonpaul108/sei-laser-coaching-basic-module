describe("startToEnd1", function () {
  it("return type should be a string", function () {
    expect(startToEnd1("aa", 0, 1)).to.be.a("string");
  });

  it("should return the expected string", function () {
    expect(startToEnd1("telescope", 2, 5)).to.deep.eq("lesc");
    expect(startToEnd1("liked", 0, 3)).to.deep.eq("like");
    expect(startToEnd1("wishy-washy", 5, 10)).to.deep.eq("-washy");
  });

  it("should use a for loop", function () {
    expect(startToEnd1.toString()).to.include("for");
  });

  it("should not split the given string", function () {
    expect(startToEnd1.toString()).to.not.include(".split");
  });
});


describe("exclusive1", function () {
  it("return type should be a string", function () {
    expect(exclusive1("aaa", 0, 2)).to.be.a("string");
  });

  it("should return the expected string", function () {
    expect(exclusive1("telescope", 2, 5)).to.deep.eq("es");
    expect(exclusive1("liked", 0, 3)).to.deep.eq("ik");
    expect(exclusive1("wishy-washy", 5, 10)).to.deep.eq("wash");
  });

  it("should use a 'for' loop", function () {
    expect(exclusive1.toString()).to.include("for");
  });

  it("should not split the given string", function () {
    expect(exclusive1.toString()).to.not.include(".split");
  });
});

describe("exclusive2", function () {
  it("return type should be a string", function () {
    expect(exclusive2("aaa", 0, 2)).to.be.a("string");
  });

  it("should return the expected string", function () {
    expect(exclusive2("telescope", 2, 5)).to.deep.eq("es");
    expect(exclusive2("liked", 0, 3)).to.deep.eq("ik");
    expect(exclusive2("wishy-washy", 5, 10)).to.deep.eq("wash");
  });

  it("should use the 'slice' method", function () {
    expect(exclusive2.toString()).to.include(".slice");
  });

  it("should not split the given string", function () {
    expect(exclusive2.toString()).to.not.include(".split");
  });
});

describe("concatMe", function () {
  it("return type should be a string", function () {
    expect(concatMe("Tom")).to.be.a("string");
  });

  it("should return the expected string", function () {
    expect(concatMe("Josh")).to.deep.eq("Josh, hello");
    expect(concatMe("Tom")).to.deep.eq("Tom, hello");
    expect(concatMe("Jeremy")).to.deep.eq("Jeremy, hello");
  });

  it("should not split the given string", function () {
    expect(concatMe.toString()).to.not.include(".split");
  });
});

describe("replaceChar", function () {
  it("return type should be a string", function () {
    expect(replaceChar("Tom", "M")).to.be.a("string");
  });

  it("should return the expected string", function () {
    expect(replaceChar("Josh", "M")).to.deep.eq("Mosh");
    expect(replaceChar("jellow", "m")).to.deep.eq("mellow");
    expect(replaceChar("lake", "r"), 5, 10).to.deep.eq("rake");
  });

  it("should not split the given string", function () {
    expect(replaceChar.toString()).to.not.include(".split");
  });
});

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

describe("findIndex", function () {
  var arr = [
    { key1: "Hello" },
    { key2: "Thoughts" },
    { weird: "these clothes" },
    { time: "get a watch" },
  ];

  var arr2 = [
    { pants: "20" },
    { shirts: "30" },
    {},
    {},
    {},
    {
      socks: "40",
      hats: "50",
    },
  ];

  it("should return an index number", function () {
    expect(findIndex([...arr], "weird")).to.be.a("number");
  });

  it("should return the expected index", function () {
    expect(findIndex([...arr], "weird")).to.deep.eq(2);
    expect(findIndex([...arr], "pants")).to.deep.eq(-1);
    expect(findIndex([...arr2], "socks")).to.deep.eq(5);
  });

  it("should return -1 if the key is not found", function () {
    expect(findIndex([...arr2], "tyme")).to.deep.eq(-1);
    expect(findIndex([...arr], "mold")).to.deep.eq(-1);
  });

  it("should not use methods Object.keys or Object.values", function () {
    expect(findIndex.toString()).to.not.include("Object.keys");
    expect(findIndex.toString()).to.not.include("Object.values");
  });
});

describe('splitAtChar', function() {

  var arr1 = ['tall_tell', 'jumping_frogs','serious_dogs'];
  var arr2 = ['aba', 'aba','aba'];
  var arr3 = ['rainy+day', 'warm+day', 'sunny+day', 'snowy+day'];

  it("return type should be an array", function() {
    // expect(splitAtChar([...arr1], '_')).to.be.an('array')
  })

  it("should return the an array of strings with target replaced with a space", function() {
    // expect(splitAtChar([...arr1], '_')).to.eql(['tall tell', 'jumping frogs', 'serious dogs'])
    expect(splitAtChar([...arr2], 'b')) .to.eql(['a a', 'a a', 'a a'])
    // expect(splitAtChar([...arr3], '+')).to.eql(['rainy day', 'warm day', 'sunny day', 'snowy day'])
  })

})