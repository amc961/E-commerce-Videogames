function validarInfo() {
    let users = JSON.parse(localStorage.getItem("users"))
    let userName = document.getElementById("InputEmail");
    let pass = document.getElementById("InputPassword");
    let encontrado = false
    users.forEach((usuario) =>{
      if (userName.value === usuario.email && pass.value === usuario.pass) {
        encontrado = true
        if(usuario.esAdmin){
            location.href = `../Pages/admin.html?=${usuario.id}`
        }
        else{
            location.href = `../Pages/usuarioLogueado.html?=${usuario.id}`
    }
      }
    })
    if(!encontrado){
        alert("Usuario o contraseña invalidas")
    }
    userName.value = ""
    pass.value = ""
  }