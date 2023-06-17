let userss = JSON.parse(localStorage.getItem('loggeduser')); // Obtener los usuarios del localStorage y convertirlos a objeto

if (userss.esAdmin === true) {
            location.href = '../Pages/adminProd.html'; // Redirigir al usuario administrador
          } else {
            location.href = '../Pages/usuarioLogueado.html'; // Redirigir al usuario no administrador
          } 
function cerrarsesion(){
  localStorage.removeItem("loggeduser")
}