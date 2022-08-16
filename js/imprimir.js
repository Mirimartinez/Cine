function plantilla(objeto){
    return  `
            <div class="pelicula">
                <div class="pelicula-titulo">
                    <img src="${objeto.imagen}" alt="foto-pelicula">
                    <h4>${objeto.nombre}</h4>
                </div>
                <div class="pelicula-descripcion">
                    <p>${objeto.genero}</p>
                    <p>${objeto.descripcion}</p>
                </div>
            </div>
            `
}

function imprimirEnHtml(objeto){
    document.querySelector('.container-peliculas').innerHTML += plantilla(objeto)
}

imprimirEnHtml(padrino)
imprimirEnHtml(si)
imprimirEnHtml(scream)
imprimirEnHtml(descanso)
imprimirEnHtml(mentiroso)