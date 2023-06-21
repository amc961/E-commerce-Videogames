const validarRegistro = () =>{
    let nombre = document.getElementById("nameInput")
    let apellido = document.getElementById("lastNameInput")
    let email = document.getElementById("emailInput")
    let passw = document.getElementById("passInput")
    let nombreTexto = document.getElementById("nameText")
    let apeTexto = document.getElementById("lastNameText")
    let emailTexto = document.getElementById("emailText")
    let passTexto = document.getElementById("passText")
    let validName = validarText(nombre, nombreTexto) 
    let validApe = validarText(apellido, apeTexto)
    let validEmail = validarEmail(email, emailTexto)
    let validPass = validarPass(passw, passTexto)
    if(validName && validApe && validEmail && validPass){
        let users = JSON.parse(localStorage.getItem("users"))
        let id = users.length + 1
        let user = {id: id, nombre: nombre.value,  apellido: apellido.value, email: email.value, pass: passw.value, esAdmin: false}
        let usuarios = users.filter((usuario) => usuario.email === user.email)
        if(usuarios.length >0){
            alert("Email ya registrado")
        }else{
            users.push(user)
            localStorage.setItem("users", JSON.stringify(users))
            nombre.value = ""
            apellido.value = ""
            email.value = ""
            passw.value =""
            nombre.style.borderBlockColor = ""
            apellido.style.borderBlockColor =""
            email.style.borderBlockColor =""
            passw.style.borderBlockColor =""
        }
    }
}

const validarBusqueda = () => {
    let buscadorTexto = document.getElementById("searchText")
    let validSearch = validarBuscador(busqueda, buscadorTexto)
}

let busqueda = document.getElementById("idInputSearch")
busqueda.addEventListener("input", validarBusqueda)