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
        alert("Genial")
    }
}

