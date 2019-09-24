
/*function filtrarPorTipo(pokemon, types){
  return pokemon.filter(item => item.type.includes(types));
  
}*/
window.app = {
  filtrarPorTipo,
  ordenPokemons,
  computeStats,
};

//filtrar pokemon

function filtrarPorTipo(pokemon, types) { 
  // 
  let pokeTipos = []; // recebe/adiciona o pokemon filtrado
  for (let i = 0; i < types.length; i++) { //entra no array que guarda os tipos de pokemon
    const type = types[i]; 
    pokemon.map(function (personagem) { //procura dentro do "for" o tipo de pokemon selecionado no checkbox
      if (personagem.type.includes(type)) { // determinamos se realmente o array contem o tipo de pokemon selecionado
        pokeTipos.push(personagem); //retorna então adionando o pokemon selecionado ao array    
      }
          
    });     
  }
  personagens = pokeTipos; 
  carregarPokemon(); //coloca na tela o pokemon filtrado a partir da carregamento de todos os cards
    
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

function ordenPokemons(orderPokemon, pokemons) {
  // const personagens = POKEMON.pokemon;
  let orderList = [];

  switch (orderPokemon) {
  case "a-z": 
<<<<<<< HEAD
    pokemons.sort((a, b) => {
=======
    personagens.sort((a, b) => {
>>>>>>> 0c82e1bf22889feead3996312e7b97d0f4dcee6b
      if (a.name > b.name) {
        return 1;
      }
      return -1;
    });
    break;
  case "z-a": 
<<<<<<< HEAD
    pokemons.sort((a, b) => {
=======
    personagens.sort((a, b) => {
>>>>>>> 0c82e1bf22889feead3996312e7b97d0f4dcee6b
      if (a.name > b.name) {
        return 1;
      }
      return -1;
    });
<<<<<<< HEAD
    pokemons.reverse();
    break;
  }
  return pokemons;
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

=======
    personagens.reverse();
    break;
  }
};

/*function computeStats(data) {
  return ((data.length*100)/151).toFixed(1);
  }*/
  

/*const pokeSoma = document.getElementsByClassName(type)
. filtrarPorTipo(personagens => pokeSoma.type === "fire")
.reduce((valorAcumulado,pokeSoma)=>{
  if(valorAcumulado.type > pokeSoma.type){
  return valorAcumulado;
 } 
 return pokeSoma;
}, {"type": 0});
console.log(pokeSoma)*/

/*const pokeSoma = POKEMON.pokemon.reduce((contador, types) => Object.assign (contador, {["type"]:(contador ["type"] || 0) + 1}), {})
console.log(pokeSoma)*/

/*pokeSoma = personagens.reduce((total, elemento) => {
  if (elemento.type === 'fire') return total += (elemento.type);
  else return total}, []);
  console.log(pokeSoma)*/

/*function somaPokemon() {
    return personagens.reduce(function (soma, personagens) {
      if (personagens.type ==="fire") return soma + personagens.type;
      
    },0)
    
  }
  console.log(somaPokemon)*/
 
>>>>>>> 0c82e1bf22889feead3996312e7b97d0f4dcee6b
