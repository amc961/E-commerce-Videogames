const cargarProductos = () =>{
    let myDiv = document.getElementById("container-articles")
    let juegos = JSON.parse(localStorage.getItem("juegos"))
    let tabla = ``
    juegos.forEach(juego => {
        tabla = tabla + `<tr>
        <td>
        ${juego.idJuego}
        </td>
        <td>
        ${juego.nombre}
        </td>
        <td>
        ${juego.descripcion}
        </td>
        <td>
        <img src ="${juego.imagen}" class="img-card-style img-fluid" />
        </td>
        <td>
        ${juego.genero}
        </td>
        </tr>  `
    });
    myDiv.innerHTML = tabla
}