let users = JSON.parse(localStorage.getItem('users'))


let idUsuario = location.search.split('=')[1]
let userss = JSON.parse(localStorage.getItem('userlocalStorage')); // Obtener los usuarios del localStorage y convertirlos a objeto


if (idUsuario) {
  const filteredUsers = userss.filter((usuario) => usuario.id === parseInt(idUsuario)); // Filtrar el usuario por su ID
  
  if (filteredUsers.length > 0) {
    const user = filteredUsers[0]; // Obtener el primer usuario filtrado
    localStorage.setItem('loggeduser', JSON.stringify(user)) // creo un array en localstorage con un unico elemento, para almacenar unicamente al suario logueado
    let loggeduser = JSON.parse(localStorage.getItem('loggeduser')) //Traigo el array de localstorage para decidir en base a su rol a donde irá u

    if (loggeduser.esAdmin) {
      location.href = `../Pages/adminProd.html?id=${loggeduser.id}`; // Redirigir al usuario administrador
    } else {
      location.href = `../Pages/usuarioLogueado.html?id=${loggeduser.id}`; // Redirigir al usuario no administrador
    }
  }
} else {location.href = '../Pages/LogIn.html';} // Redirigir si el usuario no existe