// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window

const example = () => {
  return "example";
};

window.example = example;


document.getElementById("filter").addEventListener('click', function(){
  const types = Array.from(document.querySelectorAll(".type:checked")).map(function (element){
    return element.value
  })
  filtrarPorTipo(types)
     }
);







