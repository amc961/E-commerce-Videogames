const cargarDestacado = () =>{
    let imgDestacada = document.getElementById("imgDestacada")
    let juegos = JSON.parse(localStorage.getItem("juegos"))
    let imagen =  ``
    juegos.forEach((juego) => {
      if(juego.esDestacado.toString() === "true"){
        imagen = `<img src="${juego.imagen}" class="img-fluid" width="100%">`
      }
    });
    imgDestacada.innerHTML = imagen
  }
  
  cargarDestacado()