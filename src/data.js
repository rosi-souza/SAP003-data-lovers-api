
function filtrarPorTipo(pokemon, types) { 
  // 
  let pokeTipos = []
    for (let i = 0; i < types.length; i++) {
      const type = types[i]; 
        pokemon.map(function (personagem){
          if (personagem.type.includes(type)) {
              pokeTipos.push(personagem)         
          }
          
      });     
     }
    personagens = pokeTipos 
    carregarPokemon()
    
}

/*function filtrarPorTipo (types){
    let pokeTipos = []
    for (let i = 0; i < types.length; i++) {
      const type = types[i]; 
      personagens = POKEMON.pokemon;
      personagens.map(function (personagem){
          if (personagem.type.includes(type)) {
              pokeTipos.push(personagem)         
          }
          
      });     
     }
    personagens = pokeTipos 
    carregarPokemon()
  };*/


  window.ordenPokemons = ordenPokemons;

function ordenPokemons(orderPokemon) {
  const personagens = POKEMON.pokemon;
  let orderList = [];

  switch (orderPokemon){
  case "a-z": 
    personagens.sort((a, b) => {
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


  //const ordenar = document.getElementById(ordenarPokemons);
 // ordenar.addEventListener('change', () => {
     
  
  //});
  
 
  //document.getElementById("pokeSearch").addEventListener('click', function () {
  //    const getPokemon = () => {return {'pokemon'};
 // };
 //     console.log(getPokemon)
  //});
  
  
  
  /*const personagensAgrupados = .reduce(function(
    valorAcumulador, valorPokemon){   
  if (valorPokemon.type === "fire") {
    return valorAcumulador + valorPokemon.value;   
  } 0;
  console.log(personagensAgrupados)
    });*/
  
  //valorAcumulador[typePoke].push(valorPokemon);
  
  //return valorAcumulador;
    //}, {typefire: []});
    
  
  
   // if(record.gender == 'BOYS') return sum + record.value; 
///  }, 0);
//}


