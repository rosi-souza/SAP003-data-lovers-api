document.getElementById("filter").addEventListener('click', function(){
    const types = Array.from(document.querySelectorAll(".type:checked")).map(function (element){
      return element.value
    })
    filtrarPorTipo(types)
       }
  );

  window.ordenPokemons = ordenPokemons;

function ordenPokemons(orderPokemon) {
  const personagens = POKEMON.pokemon;
  let orderList = [];

  switch (orderPokemon){
  case "a-z":
    orderList = personagens.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  return -1;
});
    break;
  case "z-a":
    personagens.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  return -1;
});
    personagens.reverse();
    break;
 }
};

 // const pokeSearch = document.querySelector(".pokeSearch");
  //pokeSearch.addEventListener('click', () => {
     
  
  });
  
 
  //document.getElementById("pokeSearch").addEventListener('click', function () {
  //    const getPokemon = () => {return {'pokemon'};
 // };
 //     console.log(getPokemon)
  //});






