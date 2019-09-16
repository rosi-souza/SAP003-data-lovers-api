document.getElementById("filter").addEventListener('click', function(){
    const types = Array.from(document.querySelectorAll(".type:checked")).map(function (element){
      return element.value
    })
    filtrarPorTipo(types)
       }
  );
  











