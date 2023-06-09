const cargarProductos = () =>{
    let myDiv = document.getElementById("container-articles")
    let juegos = JSON.parse(localStorage.getItem("juegos"))
    let tabla = ``
    juegos.forEach(juego => {
        tabla = tabla + `<tr>
        <td>
        ${juego.name}
        </td>
        <td>
        ${juego.genres[0].name}
        </td>
        </tr>  `
    });
    myDiv.innerHTML = tabla
}