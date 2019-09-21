let personagens = POKEMON.pokemon;

function carregarPokemon() {

    const showPokemons = document.getElementById("principal");
    let layout = "";
    showPokemons.innerHTML = "";
    for (pokemons of personagens) {
        layout += `
          <div id="pokemon" class="poke-card">
            <div class="infos">
              <img src ="${pokemons.img}"/>
              <div>
                <p class="name">Pokemon:</p>
                ${pokemons.name}
              </div>
              <p>Tipo:</p>
              ${pokemons.type}
              <p>Fraquezas:</p>
              ${pokemons.weaknesses}
            </div>
          </div>`;

    };
    showPokemons.innerHTML = layout

}

carregarPokemon()


document.getElementById("filter").addEventListener('click', function(){
    const types = Array.from(document.querySelectorAll(".type:checked")).map(function (element){
      return element.value
    })
    filtrarPorTipo(POKEMON.pokemon, types)    
       
       }
  );

  document.getElementById("ordenarPokemons").addEventListener('change', function(){
    const ordem = Array.from(document.querySelectorAll("#ordenarPokemons")).map(function (element){
      return element.value
    })
    selectOrderPokemon(ordem)
       }
  );

function selectOrderPokemon() {
  let orderPokemon = document.getElementById("ordenarPokemons").value;
  let orderList = window.ordenPokemons(orderPokemon);
  carregarPokemon(orderList);
}


/*const pokeSoma = document.getElementsByClassName(type)
. filtrarPorTipo(personagens => pokeSoma.type === "fire")
.reduce((valorAcumulado,pokeSoma)=>{
  if(valorAcumulado.type > pokeSoma.type){
  return valorAcumulado;
 } 
 return pokeSoma;
}, {"type": 0});
console.log(pokeSoma)*/


//let pokeSoma = personagens.reduce((contador, type) => Object.assign (contador, {["type"]:(contador ["type"] || 0) + 1}), {})



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
 












