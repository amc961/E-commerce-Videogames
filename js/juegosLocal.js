const traerJuegos = () => {
    fetch("https://api.rawg.io/api/games?key=aa2e1c5b1fdf46ada9240e4ab295ee9a")
        .then(response => response.json())
        .then(data => {
            juegos = data.results
            body = document.getElementById("myCards")
            cards = ``
            juegos.forEach(juego => {
                console.log(juego.genres[0].name)
                cards = cards + `<div class="card" style="width: 18rem;">
                <img src=${juego.background_image} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${juego.name}</h5>
                  <p>Categoria: ${juego.genres[0].name}</p>
                  <a href="#" class="btn btn-primary">Ver mas</a>
                </div>
              </div>`
            body.innerHTML = cards
            localStorage.setItem("juegos", JSON.stringify(juegos))
            });
        })

}

traerJuegos()
