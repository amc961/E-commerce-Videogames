let botonAdd = document.getElementById("add")
let botonDel = document.getElementById("del")
let botonAct = document.getElementById("act")
botonAdd.disabled = true
botonDel.disabled = true
botonAct.disabled = true


const cargarProductos = () =>{
    botonAdd.disabled = false
    botonDel.disabled = false
    botonAct.disabled = false
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

const addProducto = () =>{

}