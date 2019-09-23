
require("../src/data.js");

describe("example", () => {
  it("is a function", () => {
    expect(typeof example).toBe("function");
  });

  it("returns `example`", () => {
    expect(example()).toBe("example");
  });
});

//filtrarPorTipo([{type:["fire", "poison"]}, 
//{type:["grass", "water"]}, {type:["fire", "ice"]}], 
//["fire"])