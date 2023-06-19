const cargarUsuarios = () => {
    let myDiv = document.getElementById("container-articles")
    let users = JSON.parse(localStorage.getItem("users"))
    let tabla = ``
    users.forEach(user => {
        tabla = tabla + `<tr>
        <td>
        ${user.id}
        </td>
        <td>
        ${user.nombre}
        </td>
        <td>
        ${user.apellido}
        </td>
        <td>
        ${user.email}
        </td>
        <td>
        ${user.pass}
        </td>
        <td>
        ${user.esAdmin}
        </td>
        </tr>  `
    });
    myDiv.innerHTML = tabla
}

const cargarUser = () => {
    let nombreUser = document.getElementById("nombreUser").value
    let apellidoUser = document.getElementById("apellidoUser").value
    let emailUser = document.getElementById("emailUser").value
    let passUser = document.getElementById("passUser").value
    let users = JSON.parse(localStorage.getItem("users"))
    let esAdminUser = document.getElementById("adminUser").value
    let nomText = document.getElementById("nombreTexto")
    let apeText = document.getElementById("apellidoTexto")
    let emailText = document.getElementById("emailTexto")
    let passText = document.getElementById("contraTexto")
    let adminText = document.getElementById("esAdminTexto")
    let validNom = validarText(document.getElementById("nombreUser"), nomText)
    let validApe = validarText(document.getElementById("apellidoUser"), apeText)
    let validEmail = validarEmail(document.getElementById("emailUser"), emailText)
    let validPass = validarPass(document.getElementById("passUser"), passText)
    let validAdmin = validarAdmin(document.getElementById("adminUser"), adminText)
    let idUser = users.length + 1
    if(validNom && validarApe && validEmail && validPass && validAdmin){
        users.push({ id: idUser, nombre: nombreUser, apellido: apellidoUser, email: emailUser, pass: passUser, esAdmin: esAdminUser })
        localStorage.setItem("users", JSON.stringify(users))
        cargarUsuarios()
    }else{
        alert("Datos erroneos. Intentelo nuevamente")
    }

}

const delUser = () => {
    let idUser = document.getElementById("idUser").value
    let idTexto = document.getElementById("idTexto")
    let users = JSON.parse(localStorage.getItem("users"))
    let validId = validarNumber(document.getElementById("idUser"), idTexto)
    if (validId) {
        let pos = -1
        for (let i = 0; i < users.length; i++) {
            if (idUser == users[i].id) {
                pos = i
            }
        }
        if (pos == -1) {
            alert("Id inexistente")
        } else {
            users.splice(pos, 1)
            for (let i = 0; i < users.length; i++) {
                users[i].id = i + 1
            }
            localStorage.setItem("users", JSON.stringify(users))
            cargarUsuarios()
        }
    }
    else{
        alert("Datos erroneos. No se elimino usuario")
    }

}

const actUser = () => {
    let nombreUser = document.getElementById("nomUs").value
    let apellidoUser = document.getElementById("apeUs").value
    let emailUser = document.getElementById("emUs").value
    let passUser = document.getElementById("contUs").value
    let admin = document.getElementById("adUs").value
    let users = JSON.parse(localStorage.getItem("users"))
    let idUser = parseInt(document.getElementById("idAct").value)
    let flag = false
    let idText = document.getElementById("idText")
    let nomText = document.getElementById("nameText")
    let apeText = document.getElementById("apeText")
    let emailText = document.getElementById("emailText")
    let passText = document.getElementById("passText")
    let adminText = document.getElementById("adminText")
    let validId = validarNumber(document.getElementById("idAct"), idText)
    let validNom = validarText(document.getElementById("nomUs"), nomText)
    let validApe = validarText(document.getElementById("apeUs"), apeText)
    let validEmail = validarEmail(document.getElementById("emUs"), emailText)
    let validPass = validarPass(document.getElementById("contUs"), passText)
    let validAdmin = validarAdmin(document.getElementById("adUs"), adminText)
    if (validId && validNom && validApe && validEmail && validPass && validAdmin) {
        let user = { id: idUser, nombre: nombreUser, apellido: apellidoUser, email: emailUser, pass: passUser, esAdmin: admin }
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == idUser) {
                users[i] = user
                flag = true
                localStorage.setItem("users", JSON.stringify(users))
                cargarUsuarios()
            }
        }
        if (!flag) {
            alert("No se encontro el usuario que desea modificar")
        }
    }
    else {
        alert("Datos erroneos. No se actualizo el usuario")
    }

}

function cerrarsesion() {
    localStorage.removeItem("loggeduser")
}