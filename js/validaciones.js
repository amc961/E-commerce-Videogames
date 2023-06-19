const validar = () =>{
    let inputEmail = document.getElementById("exampleInputEmail1")
    let inputPass = document.getElementById("exampleInputPassword1")
    let divEmail = document.getElementById("emailHelp")
    let divPass = document.getElementById("passHelp")
    validarInputComun(inputEmail, divEmail)
    validarPass(inputPass, divPass)
}