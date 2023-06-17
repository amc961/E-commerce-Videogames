let InputEmail = document.getElementById("InputEmail")
let InputPassword = document.getElementById("InputPassword")

let divErrPass = document.getElementById("divErrPass")
let divErrUser = document.getElementById("msgError")

let buttonRegister = document.getElementById("buttonRegister")

divErrUser.classList = "d-none"
divErrPass.classList = "d-none"
let objectForm = {
    username : "",
    pass: ""
}

const inputChange = (event)=>{
    const {name,value} = event.target
objectForm [name]= value

switch (name) {
    case "username":
        divErrUser.classList = "d-none"
        InputEmail.classList.remove("is-invalid")
        break;

        case "pass":
            divErrPass.classList = "d-none"
            InputPassword.classList.remove("is-invalid")
            break;
    
}



}

const register = ()=> {
const {username,pass} = objectForm

  
    
 if (!username) {
    divErrUser.classList = "d-block text-danger"
    InputEmail.classList.add("is-invalid")
}else if (!pass) {
    divErrPass.classList = "d-block text-danger"
    InputPassword.classList.add("is-invalid")
 }}



InputEmail.addEventListener("input", inputChange)
InputPassword.addEventListener("input", inputChange)
buttonRegister.addEventListener("click", register)