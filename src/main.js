// let personagens = POKEMON.pokemon;
const showPokemons = document.getElementById("principal");

const getPokemon = () => {
  let layout = "";
  showPokemons.innerHTML = "";
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response => response.json())
    .then((data) => {
      const dataBase = data.results;
      dataBase.map(x => {
        layout += `
            <div id="pokemon" class="poke-card">
              <div class="infos">
                <div id = "name">
                  ${x.name}
              </div>
              <p class="subtitle">Tipo:</p>
              <p class="subtitle">Fraquezas:</p>
            </div>
          `;
        showPokemons.innerHTML = layout;
      });
    });
};

// <p> ${dataBase.map(x => x.name)} </p>
getPokemon();

// function carregarPokemon(pokemons) {
//   personagens = pokemons;

//   const showPokemons = document.getElementById("principal");
//   let layout = "";
//   showPokemons.innerHTML = "";
//   for (pokemon of pokemons) {
//     layout += `
//           <div id="pokemon" class="poke-card">
//             <div class="infos">
//               <img src ="${pokemon.img}"/>
//               <div id = "name">
//                 ${pokemon.name}
//               </div>
//               <p class="subtitle">Tipo:</p>
//               ${pokemon.type}
//               <p class="subtitle">Fraquezas:</p>
//               ${pokemon.weaknesses}
//             </div>
//           </div>`;
//   };
//   showPokemons.innerHTML = layout;
// }
// carregarPokemon(personagens);

// document.getElementById("filter").addEventListener("click", function() {
//   const types = Array.from(document.querySelectorAll(".type:checked")).map(function (element) {
//     //foi criado um array, no qual estão os pokemon filtrados, a partir do array onde estão todos os pokemon
//     //queryselectorall retornou uma lista com os elementos especificados(tipos checados pelo usuário)
//     // map foi chamado para buscar o tipo dentro desse novo array
//     return element.value;
//   });
//   filtrarPorTipo(POKEMON.pokemon, types);
//   const pokemonFiltrado = app.filtrarPorTipo(POKEMON.pokemon, types);

//   carregarPokemon(pokemonFiltrado);

// });

// document.getElementById("ordenarPokemons").addEventListener("change", function() {
//   const ordem = Array.from(document.querySelectorAll("#ordenarPokemons")).map(function (element) {
//     return element.value;
//   });
//   selectOrderPokemon(ordem);
// }
// );

// function selectOrderPokemon() {
//   let orderPokemon = document.getElementById("ordenarPokemons").value;
//   let orderList = window.ordenPokemons(orderPokemon, personagens);
//   carregarPokemon(orderList);
// }

// function showTypes() {
//   let qtTypes = app.pokeCalc(personagens);
//   for (tipo in qtTypes) {
//     document.getElementById("type"+tipo).innerHTML = qtTypes[tipo];
//   }

// }

// showTypes();

