const juegos = [
    {
      idJuego: 1,
      nombre: "Devil May Cry 5",
      descripcion: "Devil May Cry 5 es un juego de acción hack and slash ambientado en la clásica franquicia de Capcom que, manteniendo a Dante como protagonista, introduce nuevos enemigos, jugabilidad y gráficos pero respetando los estándares a los que estamos acostumbrados en la franquicia DMC.",
      imagen: "https://i.blogs.es/94d4c1/devil-may-cry-5-analisis-01/1366_2000.jpg",
      genero: "Hack and Slash",
      esDestacado: true
    },
    
    {
      idJuego: 2,
      nombre: "Grand Theft Auto 5",
      descripcion: "Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto en tercera persona desarrollado por el estudio escocés Rockstar North y distribuido por Rockstar Games.",
      imagen: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      genero: "Accion - Aventura - Mundo Abierto",
      esDestacado: false
    },
  
    {
      idJuego: 3,
      nombre: "Tales of Arise",
      descripcion: "Tales of Arise es un videojuego de rol de acción desarrollado y publicado por Bandai Namco Entertainment. Es una nueva entrega de la saga Tales of y su lanzamiento se produjo el 10 de septiembre de 2021 en Microsoft Windows, PlayStation 4 y 5 y Xbox One y Series X|S.",
      imagen: "https://static.bandainamcoent.eu/high/tales-of/tales-of-arise/03-news/tales-of-arise-release-day.jpg",
      genero: "Rol - Aventura",
      esDestacado: false
    },
  
    {
      idJuego: 4,
      nombre: "Resident Evil 4 Remake",
      descripcion: "God of War es un videojuego de acción-aventura desarrollado por SCE Santa Monica Studio y publicado por Sony Interactive Entertainment. Su lanzamiento se produjo el 20 de abril de 2018 como un título exclusivo para la consola PlayStation 4.​ Posteriormente, fue lanzado en Microsoft Windows el 14 de enero de 2022.​",
      imagen: "https://img.youtube.com/vi/7RPSBeRIP6Y/maxresdefault.jpg",
      genero: "Horror",
      esDestacado: false
    },
  
    {
      idJuego: 5,
      nombre: "God of War (2018)",
      descripcion: "Tales of Arise es un videojuego de rol de acción desarrollado y publicado por Bandai Namco Entertainment. Es una nueva entrega de la saga Tales of y su lanzamiento se produjo el 10 de septiembre de 2021 en Microsoft Windows, PlayStation 4 y 5 y Xbox One y Series X|S.",
      imagen: "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/ax0V5TYMax06mLzmkWeQMiwH.jpg",
      genero: "Rol - Aventura - Accion - Hack and Slash",
      esDestacado: false
    }
  ]

  users = [
    {
        id: 1,
        nombre: "Damian",
        apellido: "Lobos",
        email: "damianlobos24@gmail.com",
        pass: "yo24101994",
        esAdmin: true
    },
    {
        id: 2,
        nombre: "Zoe",
        apellido: "Lobos",
        email: "zoeLobos1@gmail.com",
        pass: "09052018Zoe",
        esAdmin: false
    }
]

const cargar = () =>{
  if(localStorage.length == 0) {
    localStorage.setItem("juegos", JSON.stringify(juegos))
    localStorage.setItem("users", JSON.stringify(users))
  } 

}

cargar()

