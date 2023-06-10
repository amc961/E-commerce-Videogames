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
      <a href="#" class="btn btn-primary">Ver mas</a>
    </div>
  </div>
  </div>`
  })
  body.innerHTML = cards
}

traerJuegos()
