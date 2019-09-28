# Data Lovers (DashBoard Project) ![alt text](http://secureservercdn.net/198.71.233.106/990.175.myftpupload.com/wp-content/uploads/2017/09/Pokemon.jpg)




***


##  Resumo do projeto


Neste projeto construimos uma _página web_responsiva_,para visualizar um conjunto (set) de dados do tema:

* [Pokémon](src/data/pokemon/pokemon.json):que fornece uma lista com os 151 Pokémon da região de
Kanto, com suas respectivas estatísticas utilizadas no jogo [Pokémon GO](http://pokemongolive.com).

O projeto visou adequar-se às necessidades dos usuários, conforme suas histórias, permitindo aos mesmos **visualizar dados,filtrá-los, ordená-los e fazer algum cálculo agregado**
Por cálculo agregado nos referimos aos diversos cálculos que podemos fazer com os dados para mostrar a informação mais relevante para os usuários (médias, valores máximos e míimos,etc), neste caso mostramos ao usuário a quantidade de pokémons existente dentro de cada tipo (fogo, água, pedra, etc..).



### Definição de produto


Durante o processo de criação da aplicação fizemos em um primeiro momento rascunhos em lápis e papel, e questionamos as necessidades/informações básicas que o usuário tem.
Definimos o produto a partir de um usuário que gostaria de ter acesso rápido e claro à informações básicas sobre os pokemon, sendo este o principal benefício para os jogadores/caçadores do "pokemon go".Ou seja, ao utilizar o site o usuário terá acesso as imagens dos pokémons em forma de cards contendo seus nomes, tipos e fraquezas.

![](https://github.com/elaineshimabukuro/SAP003-data-lovers/blob/elaine-readme/img/img/1  prototipo-img.jpeg)
![](https://github.com/elaineshimabukuro/SAP003-data-lovers/blob/elaine-readme/img/2prototipo-img.jpeg)
![](https://github.com/elaineshimabukuro/SAP003-data-lovers/blob/elaine-readme/img/3prototipo-img.jpeg)
![](https://github.com/elaineshimabukuro/SAP003-data-lovers/blob/elaine-readme/img/4prototipo-img.jpeg)

Durante os testes de usuabilidade encontramos o seguinte problema:
1. Após filtrar ou ordenar os dados, como o usuário conseguiria retornar a lista de dados inicial, aonde os pokémons aparecem conforme o ID?
Optamos por inserir no logo (POKEMON) um link que retorna à página inicial do interface, que é acessado através de um click em cima da imagem.


### Histórias de usuário

1. Como namorada de um geek eu quero ver as imagens dos pokémons para entender o que são e poder associar os nomes aos “bichinhos”

2. Como jogador de pokémon Go eu quero poder filtrar os pokémons que aparecem na tela por tipo para saber quais pokémons de determinado tipo faltam para a minha coleção

3. Como jogador de pokémon Go eu quero poder usar a plataforma tanto no pc quanto no celular para poder acessar o site e ver os pokémons de forma padronizada, em qualquer dispositivo

4. Como jogador de pokémon Go eu quero saber quantos pokémons de cada tipo existem para saber quantos preciso caçar para ter todos os pokémons de determinado tipo.

5. Como jogador de pokémon Go eu quero poder ordenar a lista de A-Z e de Z-A para conseguir encontrar mais fácil o pokémon


## Considerações técnicas


A lógica do projeto foi implementada somente em JavaScript (ES6), HTML e CSS, sem o uso de bibliotecas e frameworks, apenas [vanilla JavaScript].

Não utilizou-se _pseudo-variável_ `this`.

A aplicação passou nos testes unitários (elaborados no arquivo test/data.spec.js )das funções implementadas no arquivo `data.js`.




***

## Checklist


* [ x ] Usar VanillaJS.
* [ x ] Não utilizar `this`.
* [ x ] Passa pelo linter (`npm run pretest`)
* [ x ] Passa pelos testes (`npm test`)
* [ x ] Testes unitários cobrem um mínimo de 70% de statements, functions, lines e branches.
* [ x ] Inclui uma _definição de produto_ clara e informativa no `README.md`.
* [ x ] Inclui histórias de usuário no `README.md`.
* [ x ] Inclui rascunho da solução (protótipo de baixa fidelidade) no `README.md`.
* [ x ] Inclui uma lista de problemas detectados nos testes de usabilidade no `README.md`.
* [ x ] UI: Mostra lista/tabela/etc com dados e/ou indicadores.
* [ x ] UI: Permite ordenar dados por um ou mais campos (A-Z e Z-A).
* [ x ] UI: Permite filtrar dados com base em uma condição (elemento ao qual o pokémon pertence).
* [ x ] UI: É _responsivo_.
