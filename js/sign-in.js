let nameInput = document.getElementById("nameInput")
let lastNameInput = document.getElementById("lastNameInput")
let  emailInput = document.getElementById("emailInput")
let passInput = document.getElementById("passInput")
let buttonRegister = document.getElementById("buttonRegister")


let divErrPass = document.getElementById("divErrPass")
let divErrUser = document.getElementById("msgError")
let divErrLast = document.getElementById("divErrLast")
let divErrEmail = document.getElementById("divErrEmail")
let localStorageArray = JSON.parse(localStorage.getItem("users")) || []

let arrayUsuarios = []

divErrEmail.classList= "d-none"
divErrPass.classList= "d-none"
divErrUser.classList= "d-none"
divErrLast.classList= "d-none"

let idUser = localStorageArray.length === 0 ? 1 :
localStorageArray[localStorageArray.length - 1].id +1



let objectForm ={
    id : idUser,
    name: "",
    pass:"",
    email: "",
    lastName: ""
}



const inputChange = (event)=>{



const {name,value} = event.target
objectForm [name]= value

switch (name) {
    case "name":
        divErrUser.classList = "d-none"
        nameInput.classList.remove("is-invalid")
        break;
        case "lastName":
            divErrLast.classList = "d-none"
            lastNameInput.classList.remove("is-invalid")
            break;
    

        case "pass":
            divErrPass.classList = "d-none"
            passInput.classList.remove("is-invalid")
            break;
            case "email":
                divErrEmail.classList = "d-none"
                emailInput.classList.remove("is-invalid")
                break;
        
    
  
}
}








const register = ()=>{
    const {name,pass,email,lastName} = objectForm
    let users = JSON.parse(localStorage.getItem("users"))
    let idU = users.length + 1
    let usuario = {id: idU, nombre: name, apellido: lastName, email: email, pass: pass, esAdmin: false}
    if (  name && pass && email && lastName) {
        users.push(usuario)
        localStorage.setItem ("users", JSON.stringify(users))
    }
    
    if (!name && !pass && ! email && ! lastName) {
        alert("vacio")
        
    }else if (!name) {
        divErrUser.classList = "d-block text-danger"
        nameInput.classList.add("is-invalid")
    }else if (!pass) {
        divErrPass.classList = "d-block text-danger"
        passInput.classList.add("is-invalid")
     }
     else if (!email) {
        divErrEmail.classList = "d-block text-danger"
        emailInput.classList.add("is-invalid")
     }
     else if (!lastName) {
        divErrLast.classList = "d-block text-danger"
        lastNameInput.classList.add("is-invalid")
     }}



nameInput.addEventListener("input", inputChange)
lastNameInput.addEventListener("input", inputChange)
emailInput.addEventListener("input", inputChange)
buttonRegister.addEventListener("click", register)
passInput.addEventListener("input" , inputChange) 