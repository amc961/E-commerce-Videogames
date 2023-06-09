const inputSearch = document.getElementById('idInputSearch')

const buscador = (event) => {
    let juegos = JSON.parse(localStorage.getItem("juegos"))
    const {value} = event.target
    let palabra = value.toLowerCase()
    let filtro = juegos.filter((juego) => {
        let nombreJuego = `${juego.name}`.toLowerCase()
        let genero = `${juego.genres[0].name}`.toLowerCase()
        return nombreJuego.includes(palabra) || genero.includes(palabra)
    })
    filtro.length > 0 ?
    document.getElementById("myCards").innerHTML = filtro.map((juego) =>
    `
                <div class="col d-flex justify-content-center">
                <div class="card mt-3 mb-3" style="width: 18rem; ">
                <img src=${juego.background_image} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${juego.name}</h5>
                  <p>Categoria: ${juego.genres[0].name}</p>
                  <a href="#" class="btn btn-primary">Ver mas</a>
                </div>
              </div>
              </div>`
    ).join('')
    :
    document.getElementById("myCards").innerHTML = "Busqueda no encontrada"
}


inputSearch.addEventListener('input', buscador)