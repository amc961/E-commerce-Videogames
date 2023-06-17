function validarInfo() {
    let users = JSON.parse(localStorage.getItem("users"))
    let userName = document.getElementById("InputEmail");
    let pass = document.getElementById("InputPassword");
    let encontrado = false
    let usuariologged = []
    users.forEach((usuario) =>{
      if (userName.value === usuario.email && pass.value === usuario.pass) {
        encontrado = true
        const idUserlogged = users.filter((usuario) => usuario.email === userName.value);
        usuariologged.push(idUserlogged[0])
        localStorage.setItem('loggeduser',JSON.stringify(usuariologged))
        if(usuario.esAdmin){
            location.href = `../Pages/admin.html`
        }
        else{
            location.href = `../Pages/usuarioLogueado.html`
    }
      }
    })
    if(!encontrado){
        alert("Usuario o contraseña invalidas")
    }
    userName.value = ""
    pass.value = ""
  }