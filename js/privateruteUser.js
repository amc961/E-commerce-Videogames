let userss = JSON.parse(localStorage.getItem('loggeduser')); // Obtener los usuarios del localStorage y convertirlos a objeto


          if (userss.esAdmin) {
            location.href = "../Pages/adminProd.html"; // Redirigir al usuario administrador
          }
function cerrarsesion(){
  localStorage.removeItem("loggeduser")
}