
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
              pokeTipos.push(personagem) //retorna então adcionando o pokemon selecionado ao array    
          }          
      });     
     }
    personagens = pokeTipos 
    carregarPokemon() 
}

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


/*const pokeSoma = document.getElementsByClassName(type)
. filtrarPorTipo(personagens => pokeSoma.type === "fire")
.reduce((valorAcumulado,pokeSoma)=>{
  if(valorAcumulado.type > pokeSoma.type){
  return valorAcumulado;
 } 
 return pokeSoma;
}, {"type": 0});
console.log(pokeSoma)*/

/*let pokeSoma = POKEMON.pokemon.reduce((contador, type) => Object.assign (contador, {["type"]:(contador ["type"] || 0) + 1}), {})
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
 