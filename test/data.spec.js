
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
  ]
}];

describe("ordenPokemons", () => {
  it("is a function", () => {
    expect(typeof app.ordenPokemons).toBe("function");
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
      ]
    }];

    expect(app.ordenPokemons("a-z", bancoPokemons)).toEqual(pokeName);
  });
});

describe("filtrarPorTipo", () => {
  it("is a function", () => {
    expect(typeof app.filtrarPorTipo).toBe("function");
  });

  it("returns `pokemons filtrados`", () => {
    expect(app.filtrarPorTipo(bancoPokemons, ["Fire"])).toEqual([{
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
    }]);
  });
});

/*describe("porcentagemPokemon", () => {
  it("is a function", () => {
    expect(typeof app.pokePorcentagem).toBe("function");

    it("returns `porcentagem pokemons`", () => {
      expect(app.pokePorcentagem(app.filtrarPorTipo bancoPokemons, "Fire")).toBe([{(2*100)/5

      }
    ]
    );
    });});
  });*/

  describe("pokeCalc", () => {
    it("is a function", () => {
      expect(typeof app.pokeCalc).toBe("function");
    });

    it("returns `numero de pokemons por tipo`", () => {
      expect(app.pokeCalc(bancoPokemons, countTypes)).toEqual({Grass:3;Poison:3;Fire:2});
      });
