require("../src/data.js");

describe("ordenPokemons", () => {
  it("is a function",  () => {
    expect(typeof app.ordenPokemons).toBe("function");
  });

  it("returns `A-Z`", () => {
    expect(example()).toBe("example");
  });
});
