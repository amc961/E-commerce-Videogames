let inputUser = document.getElementById("inputUser")
let inputPass = document.getElementById("pass")
let inputRepeatPass = document.getElementById("repeatPass")



let divErrUser = document.getElementById("msgErrUser")
let divErrPass = document.getElementById("divErrPass")
let divErrRepeatPass= document.getElementById("divErrRepeatPass")
let inputCheckId = document.getElementById("checkId")
let buttonRegister= document.getElementById("buttonRegister")

let localStorageArray = JSON.parse(localStorage.getItem("users")) || []

let arrayUsuarios = []


divErrUser.classList = "d-none"
divErrPass.classList = "d-none"
divErrRepeatPass.classList = "d-none"
 
let idUser = localStorageArray.length === 0 ? 1 :
localStorageArray[localStorageArray.length - 1].id +1



let objecForm = {

id: idUser,
username : "",
pass: "",
repeatPass : "",
check : false
}



const inputChange =( event) =>{
const {name, value} = event.target


if (name === "check") {
    objecForm [name] = inputCheckId.checked
}else{
    objecForm[name]= value
    switch (name) {
        case "username":
            divErrUser.classList = "d-none"
            inputUser.classList.remove("is-invalid")
            break;
            case "pass":
                divErrPass.classList = "d-none"
                inputPass.classList.remove("is-invalid")
                break;
                case "repeatPass":
                    divErrRepeatPass.classList = "d-none"
                    inputRepeatPass.classList.remove("is-invalid")
                    break;
                
      
    }
    
}







}

const register = ()=>{
    console.log(objecForm);
const {username,pass, repeatPass }= objecForm

if (username && pass && repeatPass) {
    arrayUsuarios.push(objecForm)
    localStorage.setItem ("users", JSON.stringify(arrayUsuarios))
}

if(!username && !pass && !repeatPass){
    alert("esta vacio")
}else if (!username){
    divErrUser.classList = "d-block text-danger"
    inputUser.classList.add("is-invalid")
}else if (!pass) {
    divErrPass.classList = "d-block text-danger"
    inputPass.classList.add("is-invalid")
}else if (!repeatPass) {
    divErrRepeatPass.classList = "d-block text-danger"
    inputRepeatPass.classList.add("is-invalid")
}



}



inputUser.addEventListener("input", inputChange)
inputPass.addEventListener("input", inputChange)
inputRepeatPass.addEventListener("input", inputChange)
buttonRegister.addEventListener("click", register)
inputCheckId.addEventListener("click", inputChange)
