
/*function filtrarPorTipo(pokemon, types){
  return pokemon.filter(item => item.type.includes(types));
  
}

const app = {
  filtrarPorTipo
};*/

function filtrarPorTipo(pokemon, types) { 
  // 
  let pokeTipos = [] // recebe/adiciona o pokemon filtrado
    for (let i = 0; i < types.length; i++) { //entra no array que guarda os tipos de pokemon
        const type = types[i]; 
        pokemon.map(function (personagem){ //procura dentro do "for" o tipo de pokemon selecionado no checkbox
          if (personagem.type.includes(type)) { // determinamos se realmente o array contem o tipo de pokemon selecionado
              pokeTipos.push(personagem) //retorna então adionando o pokemon selecionado ao array    
          }
          
      });     
     }
    personagens = pokeTipos 
    carregarPokemon() //coloca na tela o pokemon filtrado a partir da carregamento de todos os cards
    
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


