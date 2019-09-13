/*const POKEMONS = POKEMON.pokemon;
const img = document.getElementById("imagens");

POKEMONS.map(poke => img.innerHTML += `
<div id="pokemon" class="pokeCard">

    <div>
    ${poke.name}
    </div>
    
<img src=" ${poke.img}"/>
</div>`);*/

const personagens = POKEMON.pokemon;
const showPokemons = document.getElementById("main");

for (pokemons of personagens) {
showPokemons.innerHTML += `
<div id="pokemon" class="pokeCard">

<div>
${pokemons.name}
</div>

<img src ="${pokemons.img}"/>
</div>`;
};










