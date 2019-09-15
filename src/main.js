/*const POKEMONS = POKEMON.pokemon;
const img = document.getElementById("imagens");

POKEMONS.map(poke => img.innerHTML += `
<div id="pokemon" class="pokeCard">

    <div>
    ${poke.name}
    </div>
    
<img src=" ${poke.img}"/>
</div>`);*/

let personagens = POKEMON.pokemon;

function carregarPokemon() {

    const showPokemons = document.getElementById("main");
    showPokemons.innerHTML = "";
    for (pokemons of personagens) {
        showPokemons.innerHTML += `
<div id="pokemon" class="poke-card">

<div>
${pokemons.name}
</div>

<img src ="${pokemons.img}"/>
</div>`;

    };
}

carregarPokemon()

function filtrarPorTipo (types){
  let pokeTipos = []
  for (let index = 0; index < types.length; index++) {
    const type = types[index]; 
    personagens = POKEMON.pokemon;
    personagens.map(function (personagem){
        if (personagem.type.includes(type)) {
            pokeTipos.push(personagem)         
        }
        
    });
    
    //console.log(pokemonSelecionado.name)
  }
  personagens = pokeTipos 
  carregarPokemon()
};














