const validarEmail = (input, div) => {
    let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    let emailValido = false
    if (input.value.length === 0) {
        div.innerHTML = "El email no debe estar vacio"
        input.style.borderBlockColor = "red"
    } else if (!validEmail.exec(input.value)) {
        div.innerHTML = "El email es invalido"
        input.style.borderBlockColor = "red"
    }
    else {
        div.innerHTML = "email correcto"
        input.style.borderBlockColor = "green"
        emailValido = true
    }
    return emailValido
}

const validarPass = (input, div) => {
    let validPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    let passValido = false
    if (input.value.length === 0) {
        div.innerHTML = "La contraseña no debe estar vacia"
        input.style.borderBlockColor = "red"
    } else if (!validPass.test(input.value)) {
        div.innerHTML = "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula."
        input.style.borderBlockColor = "red"
    }
    else {
        div.innerHTML = "Paswword correcto"
        input.style.borderBlockColor = "green"
        passValido = true
    }
    return passValido
}

const validarText = (input, div) =>{
    let validText = /^[A-Z]+$/i
    let textoValido = false
    if (input.value.length === 0) {
        div.innerHTML = "El campo no debe estar vacio"
        input.style.borderBlockColor = "red"
    } else if (!validText.test(input.value)) {
        div.innerHTML = "El campo debe incluir solo letras"
        input.style.borderBlockColor = "red"
    }
    else {
        div.innerHTML = "Campo correcto"
        input.style.borderBlockColor = "green"
        textoValido = true
    }
    return textoValido
}

const validarNumber = (input, div) =>{
    let validNumber = /^[0-9]+$/
    let numeroValido = false
    if (input.value.length === 0) {
        div.innerHTML = "El campo no debe estar vacio"
        input.style.borderBlockColor = "red"
    } else if (!validNumber.test(input.value)) {
        div.innerHTML = "El campo debe incluir solo numeros"
        input.style.borderBlockColor = "red"
    }
    else {
        div.innerHTML = "Campo correcto"
        input.style.borderBlockColor = "green"
        numeroValido = true
    }
    return numeroValido
}

const validarInputComun = (input, div) => { 
    let inputComun = false
    if(input.value.length === 0){
        div.innerHTML ="El campo no debe estar vacio"
        input.style.borderBlockColor = "red"
    }else if(input.value.length<2 || input.value.length>100){
        div.innerHTML = "El campo debe contener entre 2 y 100 caracteres"
        input.style.borderBlockColor = "red"
    }else{
        div.innerHTML = "Campo correcto"
        input.style.borderBlockColor = "green"
        inputComun = true
    }
    return inputComun
}

const validarAdmin = (input, div) => { 
    let inputComun = false
    if(input.value.length === 0){
        div.innerHTML ="El campo no debe estar vacio"
        input.style.borderBlockColor = "red"
    }else if(input.value !== "true"  || input.value !== "false"){
        div.innerHTML = "El campo debe contener true o false"
        input.style.borderBlockColor = "red"
    }else{
        div.innerHTML = "Campo correcto"
        input.style.borderBlockColor = "green"
        inputComun = true
    }
    return inputComun
}