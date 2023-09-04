function crearCards(data){
    const div = document.getElementById("prueba")
    const nuevaImg = document.createElement("img")
    const nuevoTitulo = document.createElement("h4")

    div.innerHTML = ''; // Limpia el contenido previo en el elemento div

if (Array.isArray(data.results)) {
  const personajesArray = data.results;
  let htmlContentToAppend = ''; // Inicializa la variable htmlContentToAppend

  personajesArray.forEach(element => {
    htmlContentToAppend += `
      <div class="col-md-4"> <!-- Agregamos una columna de Bootstrap -->
        <div class="card mb-4"> <!-- Agregamos un margen inferior a la tarjeta -->
          <img src="${element.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${element.id}</li>
            <li class="list-group-item">Especie: ${element.species}</li>
            <li class="list-group-item">Origen: ${element.origin.name}</li>
          </ul>
        </div>
      </div>
    `;
  });

  // Agrega el contenido generado al elemento con id "div"
  div.innerHTML = `
    <div class="row">
      ${htmlContentToAppend}
    </div>
  `;
} else {
  console.log("No se encontraron resultados en el arreglo 'data.results'");
}
}






async function getApi(){
    const radioSeleccionado = document.querySelector('input[name="pagina"]:checked')
    const valor = radioSeleccionado.value
    const url = 'https://rickandmortyapi.com/api/character?page='+valor
    const response = await fetch(url)
    const data = await response.json()
    crearCards(data)
    
}
document.addEventListener("DOMContentLoaded", ()=>{
    const boton = document.getElementById("verificarBoton")
    boton.addEventListener("click", getApi)
})



