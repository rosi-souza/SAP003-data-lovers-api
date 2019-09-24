
/*require("../src/data.js");

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
