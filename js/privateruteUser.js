let userlocalStorage = JSON.parse(localStorage.getItem('users')) 

userlocalStorage.forEach(usuario => {

if(!usuario.logueado){
  location.href = '../Pages/LogIn.html'
} else { }
}

);
