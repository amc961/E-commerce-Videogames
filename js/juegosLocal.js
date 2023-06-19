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
      <p>Precio: ${juego.precio}</p>
      <button type="button" class="button-style" data-bs-toggle="modal" data-bs-target="#exampleModal${juego.idJuego}">Ver mas</button>
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
          <button type="button" class="button-style" data-bs-dismiss="modal" onclick="agregaMeGusta(${juego.idJuego})">Me gusta</button>
          <button type="button" class="button-style" data-bs-dismiss="modal" onclick="agrcar(${juego.idJuego})">Agregar a carrito</button>
        </div>
      </div>
    </div>
  </div>`
  })
  modales.innerHTML = modals
}

cargarModales()
traerJuegos()


const agrcar = (idJuego) => {
    let GameLS = JSON.parse(localStorage.getItem('carrito'))
    let juegos = JSON.parse(localStorage.getItem("juegos"))
    let juegofilter = juegos.filter((game) => game.idJuego.toString() === idJuego.toString())
    console.log(juegofilter)
    let JuegoExist = GameLS.filter((prod) => prod.idJuego.toString() ===idJuego.toString())
    
    
    if(JuegoExist.length === 0) {
        GameLS.push(juegofilter[0])
    localStorage.setItem("carrito", JSON.stringify(GameLS))
    }

    
}


const agregaMeGusta = (idJuego) => {                                        
  let meGustaList = JSON.parse(localStorage.getItem("meGusta"));             // se guarda lo que gusta
  let juegos = JSON.parse(localStorage.getItem("juegos"));                   // lista de juegos  

                                   
  let juegoSeleccionado = juegos.filter(                                      //seleccionar el juego q indica el parametro idJuego, recupero el juego
    (game) => game.idJuego.toString() === idJuego.toString()                  
  );

  
  let juegoEnLista = meGustaList.filter(                                       //checkeo si el juego ya esta en la lista de me gusta, lo devuelve
    (juego) => juego.idJuego.toString() === idJuego.toString()
  );

  if (juegoEnLista.length === 0) {
    meGustaList.push({
      idJuego: juegoSeleccionado[0].idJuego,
      nombre: juegoSeleccionado[0].nombre,
    });
    localStorage.setItem("meGusta", JSON.stringify(meGustaList));
  }
};
//fin me gusta 
