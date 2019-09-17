let personagens = POKEMON.pokemon;

function carregarPokemon() {

    const showPokemons = document.getElementById("main");
    showPokemons.innerHTML = "";
    for (pokemons of personagens) {
        showPokemons.innerHTML += `
<div id="pokemon" class="poke-card">
<div class="infos">
<img src ="${pokemons.img}"/>
<div>
<p>Nome:</p>
${pokemons.name}
</div>
<p>Tipo:</p>
${pokemons.type}
<p>Fraquezas:</p>
${pokemons.weaknesses}
</div>`;

    };
}

carregarPokemon()


document.getElementById("filter").addEventListener('click', function(){
  const types = Array.from(document.querySelectorAll(".type:checked")).map(function (element){
    return element.value
  })
  filtrarPorTipo(types)
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




 














