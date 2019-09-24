
/*require("../src/data.js");

describe("example", () => {
  it("is a function", () => {
    expect(typeof example).toBe("function");
  });

  it("returns `example`", () => {
    expect(example()).toBe("example");
  });
});*/

//filtrarPorTipo([{type:["fire", "poison"]}, 
//{type:["grass", "water"]}, {type:["fire", "ice"]}], 
//["fire"])

require("../src/data.js");

describe("filtrarPorTipo", () => {
  it("is a function", () => {
    expect(typeof app.filtrarPorTipo).toBe("function");
  });

  it("returns `pokemons filtrados`", () => {
    const bancoTipos = [{
      "id": 1,      
      "name": "Bulbasaur",     
      "type": [
        "Grass",
        "Poison"
      ]
    }, {
      "id": 2,     
      "name": "Ivysaur",      
      "type": [
        "Grass",
        "Poison"
      ]
    }, {
      "id": 3,      
      "name": "Venusaur",
      "type": [
        "Grass",
        "Poison"
      ]
    }, {
      "id": 4,      
      "name": "Charmander",     
      "type": [
        "Fire"
      ]
    }, {
      "id": 5,      
      "name": "Charmeleon",      
      "type": [
        "Fire"
      ]}];
    expect(app.filtrarPorTipo(bancoTipos, ["Fire"])).toEqual([ {
      "id": 4,      
      "name": "Charmander",     
      "type": [
        "Fire"
      ]
    }, {
      "id": 5,      
      "name": "Charmeleon",      
      "type": [
        "Fire"
      ]}]);
  });
});
