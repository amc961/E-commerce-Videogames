
const cargarProductos = () => {
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
        ${juego.imagen}
        </td>
        <td>
        ${juego.genero}
        </td>
        </tr>  `
    });
    myDiv.innerHTML = tabla
}

const addProducto = () => {
    let nombreJuego = document.getElementById("nombreJuego").value
    let descripcionJuego = document.getElementById("descripcionJuego").value
    let imagenJuego = document.getElementById("imagenJuego").value
    let generoJuego = document.getElementById("generoJuego").value
    let juegos = JSON.parse(localStorage.getItem("juegos"))
    let id = juegos.length + 1

    juegos.push({ idJuego: id, nombre: nombreJuego, descripcion: descripcionJuego, imagen: imagenJuego, genero: generoJuego })
    localStorage.setItem("juegos", JSON.stringify(juegos))
    cargarProductos()
}

const delProducto = () => {
    let id = document.getElementById("idDel").value
    let juegos = JSON.parse(localStorage.getItem("juegos"))
    let pos = -1
    for (let i = 0; i < juegos.length; i++) {
        if (id == juegos[i].idJuego) {
            pos = i
        }
    }
    if(pos == -1){
        alert("Id inexistente")
    }else{
        juegos.splice(pos, 1)
        localStorage.setItem("juegos", JSON.stringify(juegos))
        cargarProductos()
    }
}
