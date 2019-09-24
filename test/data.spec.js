require("../src/data.js");

const bancoPokemons = [{
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

describe("ordenPokemons", () => {
  it("is a function", () => {
    expect(typeof ordenPokemons).toBe("function");
  });

  it("returns `a-z`", () => {
    const pokeName = [{
      "id": 1,      
      "name": "Bulbasaur",     
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
      ]}];
    
    expect(ordenPokemons("a-z", bancoPokemons)).toEqual(pokeName);
  });
});
