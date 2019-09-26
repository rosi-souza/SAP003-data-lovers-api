
window.app = {
  filtrarPorTipo,
  ordenPokemons,
  pokeCalc
};

//filtrar pokemon

function filtrarPorTipo(pokemon, types) {
  let pokeTipos = []; // recebe/adiciona o pokemon filtrado
  for (let i = 0; i < types.length; i++) { //entra no array que guarda os tipos de pokemon
    const type = types[i];
    pokemon.map(function (personagem) { //procura dentro do "for" o tipo de pokemon selecionado no checkbox
      if (personagem.type.includes(type)) { // determinamos se realmente o array contem o tipo de pokemon selecionado
        pokeTipos.push(personagem); //retorna então adicionando o pokemon selecionado ao array
      }
    });
  }
  return pokeTipos;

}

//ordenarpokemon

function ordenPokemons(orderPokemon, pokemons) {
  let orderList = [];

  switch (orderPokemon) {
  case "a-z":
    pokemons.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      return -1;
    });
    break;
  case "z-a":
    pokemons.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      return -1;
    });
    pokemons.reverse();
    break;
  }
  return pokemons;
};

//Calcula quantos pokemons tem em cada tipo

function pokeCalc(pokeData) {
  let countTypes = pokeData.reduce(function (acumulador, pokemon) {
    for (tipoPokemon of pokemon.type) {
      if (tipoPokemon in acumulador) {
        acumulador[tipoPokemon]++;
      } else {
        acumulador[tipoPokemon]=1;
      }
    }

    return acumulador;
  }, {});
  return countTypes;
};
