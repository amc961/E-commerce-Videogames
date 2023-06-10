const inputSearch = document.getElementById('idInputSearch')

const buscador = (event) => {
    let juegos = JSON.parse(localStorage.getItem("juegos"))
    const {value} = event.target
    let palabra = value.toLowerCase()
    let filtro = juegos.filter((juego) => {
        let nombreJuego = `${juego.nombre}`.toLowerCase()
        let genero = `${juego.genero}`.toLowerCase()
        return nombreJuego.includes(palabra) || genero.includes(palabra)
    })
    filtro.length > 0 ?
    document.getElementById("myCards").innerHTML = filtro.map((juego) =>
    `
                <div class="col d-flex justify-content-center">
                <div class="card mt-3 mb-3" style="width: 18rem; ">
                <img src=${juego.imagen} class="card-img-top img-card-style" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${juego.nombre}</h5>
                  <p>Categoria: ${juego.genero}</p>
                  <a href="#" class="btn btn-primary">Ver mas</a>
                </div>
              </div>
              </div>`
    ).join('')
    :
    document.getElementById("myCards").innerHTML = "Busqueda no encontrada"
}


inputSearch.addEventListener('input', buscador)