
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
        <td class="achicarTexto">
        ${juego.descripcion}
        </td>
        <td>
        ${juego.imagen}
        </td>
        <td>
        ${juego.genero}
        </td>
        <td>
        ${juego.precio}
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
    let precioJuego = document.getElementById("precioJuego").value
    let dest = document.getElementById("destJuego").value
    let juegos = JSON.parse(localStorage.getItem("juegos"))
    let nombreTexto = document.getElementById("nomProdTexto")
    let descripcionTexto = document.getElementById("descProdTexto")
    let generoTexto = document.getElementById("generoProdTexto")
    let precioTexto = document.getElementById("precioProdTexto")
    let destacadoTexto = document.getElementById("destProdTexto")
    let validNombre = validarText(document.getElementById("nombreJuego"), nombreTexto)
    let validDesc = validarInputComun(document.getElementById("descripcionJuego"), descripcionTexto)
    let validGenero = validarInputComun(document.getElementById("generoJuego"), generoTexto)
    let validPrecio = validarNumber(document.getElementById("precioJuego"), precioTexto)
    let validarDestacado = validarAdmin(document.getElementById("destJuego"), destacadoTexto)
    if (validNombre && validDesc && validGenero && validPrecio && validarDestacado) {
        let id = juegos.length + 1
        let juego = { idJuego: id, nombre: nombreJuego, descripcion: descripcionJuego, imagen: imagenJuego, genero: generoJuego, esDestacado: dest, precio: precioJuego }
        if (juego.esDestacado === "true") {
            juegos.forEach((juegoGuardado) => {
                juegoGuardado.esDestacado = false
            })
        }
        juegos.push(juego)
        localStorage.setItem("juegos", JSON.stringify(juegos))
        cargarProductos()
        document.getElementById("nombreJuego").value = ""
        document.getElementById("descripcionJuego").value = ""
        document.getElementById("imagenJuego").value = ""
        document.getElementById("generoJuego").value = ""
        document.getElementById("precioJuego").value = ""
        document.getElementById("destJuego").value = ""

    }else{
        alert("Datos erroneos")
    }

}

const delProducto = () => {
    let id = document.getElementById("idDel").value
    let idTexto = document.getElementById("idProdTexto")
    let validId = validarNumber(document.getElementById("idDel"), idTexto)
    if (validId) {
        let juegos = JSON.parse(localStorage.getItem("juegos"))
        let pos = -1
        for (let i = 0; i < juegos.length; i++) {
            if (id == juegos[i].idJuego) {
                pos = i
            }
        }
        if (pos == -1) {
            alert("Id inexistente")
        } else {
            juegos.splice(pos, 1)
            for (let i = 0; i < juegos.length; i++) {
                juegos[i].idJuego = i + 1
            }
            localStorage.setItem("juegos", JSON.stringify(juegos))
            cargarProductos()
        }
        document.getElementById("idDel").value = ""
    } else {
        alert("Datos erroneos. Intentelo nuevamente")
    }

}

const actProducto = () => {
    let nombreJuego = document.getElementById("nomJuego").value
    let descripcionJuego = document.getElementById("descJuego").value
    let imagenJuego = document.getElementById("imgJuego").value
    let generoJuego = document.getElementById("genJuego").value
    let precioJuego = document.getElementById("precioActJuego").value
    let dest = document.getElementById("destActJuego").value
    let juegos = JSON.parse(localStorage.getItem("juegos"))
    let id = parseInt(document.getElementById("idAct").value)
    let idTexto = document.getElementById("idProdTextoAct")
    let nombreTexto = document.getElementById("nombreProdTextoAct")
    let descripcionTexto = document.getElementById("descProdTextoAct")
    let generoTexto = document.getElementById("generoProdTextoAct")
    let precioTexto = document.getElementById("precioProdTextoAct")
    let destacadoTexto = document.getElementById("destProdTextoAct")
    let validId = validarNumber(document.getElementById("idAct"), idTexto)
    let validNombre = validarText(document.getElementById("nomJuego"), nombreTexto)
    let validDesc = validarInputComun(document.getElementById("descJuego"), descripcionTexto)
    let validGenero = validarInputComun(document.getElementById("genJuego"), generoTexto)
    let validPrecio = validarNumber(document.getElementById("precioActJuego"), precioTexto)
    let validarDestacado = validarAdmin(document.getElementById("destActJuego"), destacadoTexto)
    if (validId && validNombre && validDesc && validGenero && validPrecio && validarDestacado) {
        let flag = false
        let juego = { idJuego: id, nombre: nombreJuego, descripcion: descripcionJuego, imagen: imagenJuego, genero: generoJuego, esDestacado: dest, precio: precioJuego }
        for (let i = 0; i < juegos.length; i++) {
            if (juegos[i].idJuego == id) {
                if (juego.esDestacado === "true") {
                    juegos.forEach((juegoGuardado) => {
                        juegoGuardado.esDestacado = false
                    })
                }
                juegos[i] = juego
                flag = true
                localStorage.setItem("juegos", JSON.stringify(juegos))
                cargarProductos()
            }
        }
        if (!flag) {
            alert("No se encontro el juego que desea modificar")
        }
        document.getElementById("nomJuego").value = ""
        document.getElementById("descJuego").value = ""
        document.getElementById("imgJuego").value = ""
        document.getElementById("genJuego").value = ""
        document.getElementById("precioActJuego").value = ""
        document.getElementById("destActJuego").value = ""
        document.getElementById("idAct").value = ""
    } else {
        alert("Datos erroneos. Intentelo nuevamente")
    }

}

function cerrarsesion() {
    localStorage.removeItem("loggeduser")
}