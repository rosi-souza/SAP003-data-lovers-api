
//personagem = fetch('../src/data/pokemon/pokemon.json').then(function(response) {
 //    return response.json();
 //   });
 
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
 };
 
 
 




