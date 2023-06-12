const traerJuegos = () => {
  let juegos = JSON.parse(localStorage.getItem("juegos"))
  body = document.getElementById("myCards")
  cards = ``
  juegos.forEach((juego) =>{
    cards = cards + `
    <div class="col d-flex justify-content-center">
    <div class="card mt-3 mb-3" style="width: 18rem; ">
    <img src=${juego.imagen} class="card-img-top img-card-style" alt="...">
    <div class="card-body">
      <h5 class="card-title">${juego.nombre}</h5>
      <p>Categoria: ${juego.genero}</p>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${juego.idJuego}">Ver mas</button>
    </div>
  </div>
  </div>`
  })
  body.innerHTML = cards
}

const cargarModales = () => {
  let juegos = JSON.parse(localStorage.getItem("juegos"))
  let modales = document.getElementById("modals")
  let modals = ``
  juegos.forEach((juego)=>{
    modals = modals + `<div class="modal fade" id="exampleModal${juego.idJuego}" tabindex="-1" aria-labelledby="exampleModalLabel${juego.idJuego}" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">${juego.nombre}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex justify-content-center align-items-center flex-column">
          <img src="${juego.imagen}" width="100%">
          <p>${juego.descripcion}</p>
          <p>Precio: ${juego.precio}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Me gusta</button>
          <button type="button" class="btn btn-primary">Agregar a carrito</button>
        </div>
      </div>
    </div>
  </div>`
  })
  modales.innerHTML = modals
}

cargarModales()
traerJuegos()
