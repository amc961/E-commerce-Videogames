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
    let idUser = users.length +1 
    users.push({id: idUser, nombre: nombreUser, apellido: apellidoUser, email: emailUser, pass: passUser, esAdmin: esAdminUser})
    localStorage.setItem("users", JSON.stringify(users))
    cargarUsuarios()
}

const delUser = () =>{
    let idUser = document.getElementById("idUser").value
    let users = JSON.parse(localStorage.getItem("users"))
    let pos = -1
    for (let i = 0; i < users.length; i++) {
        if (idUser == users[i].id) {
            pos = i
        }
    }
    if(pos == -1){
        alert("Id inexistente")
    }else{
        users.splice(pos, 1)
        for (let i = 0; i < users.length; i++) {
            users[i].id = i + 1
        }
        localStorage.setItem("users", JSON.stringify(users))
        cargarUsuarios()
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
    let user = {id: idUser, nombre: nombreUser, apellido: apellidoUser, email: emailUser, pass: passUser, esAdmin: admin}
    for(let i = 0; i <users.length; i++){
        if(users[i].id == idUser){
            users[i] = user
            flag = true
            localStorage.setItem("users", JSON.stringify(users))
            cargarUsuarios()
        }
    }  
    if(!flag){
        alert("No se encontro el usuario que desea modificar")
    }
}

function cerrarsesion(){
    localStorage.removeItem("loggeduser")
  }