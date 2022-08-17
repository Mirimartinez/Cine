
console.log(peliculas);

function plantilla(objeto) {
  return `
  <div class="pelicula">
        <div class="pelicula-titulo">
        <img src=${objeto.imagen} alt="foto-pelicula">
        <h4>${objeto.nombre}</h4>
        </div>
        <div class="pelicula-descripcion">
        <p>${objeto.genero}</p>
        <p>${objeto.descripcion}</p>
        </div>
        </div>`;
}

function imprimirEnHtml(array){
    array.forEach(objeto => {
    document.querySelector(".container-peliculas").innerHTML += plantilla(objeto)
    });
}

// imprimirEnHtml(descanso)
// imprimirEnHtml(padrino)
// imprimirEnHtml(scream)
// imprimirEnHtml(mentiroso)
imprimirEnHtml(peliculas)

