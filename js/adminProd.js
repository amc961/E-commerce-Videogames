
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
        <td>
        ${juego.esDestacado}
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
    let dest = document.getElementById("destJuego").value
    let juegos = JSON.parse(localStorage.getItem("juegos"))
    let id = juegos.length + 1
    let juego= { idJuego: id, nombre: nombreJuego, descripcion: descripcionJuego, imagen: imagenJuego, genero: generoJuego, esDestacado: dest }
    if(juego.esDestacado === "true"){
        juegos.forEach((juegoGuardado)=> {
            juegoGuardado.esDestacado = false
        })
    }
    juegos.push(juego)
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
        for (let i = 0; i < juegos.length; i++) {
            juegos[i].idJuego = i + 1
        }
        localStorage.setItem("juegos", JSON.stringify(juegos))
        cargarProductos()
    }
}

const actProducto = () => {
    let nombreJuego = document.getElementById("nomJuego").value
    let descripcionJuego = document.getElementById("descJuego").value
    let imagenJuego = document.getElementById("imgJuego").value
    let generoJuego = document.getElementById("genJuego").value
    let dest = document.getElementById("destActJuego").value
    let juegos = JSON.parse(localStorage.getItem("juegos"))
    let id = parseInt(document.getElementById("idAct").value)
    let flag = false
    let juego = {idJuego: id, nombre: nombreJuego, descripcion: descripcionJuego, imagen: imagenJuego, genero: generoJuego, esDestacado: dest}
    for(let i = 0; i <juegos.length; i++){
        if(juegos[i].idJuego == id){
            if(juego.esDestacado === "true"){
                juegos.forEach((juegoGuardado)=> {
                    juegoGuardado.esDestacado = false
                })
            }
            juegos[i] = juego
            flag = true
            localStorage.setItem("juegos", JSON.stringify(juegos))
            cargarProductos()
        }
    }  
    if(!flag){
        alert("No se encontro el juego que desea modificar")
    }
}

const cambiarDestacados = ()=>{
    let juegos = JSON.parse(localStorage.getItem("juegos"))

    localStorage.setItem(("juegos"), JSON.stringify(juegos))
}