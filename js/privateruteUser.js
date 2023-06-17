let userss = JSON.parse(localStorage.getItem('loggeduser')); // Obtener los usuarios del localStorage y convertirlos a objeto
function verificacionuser(){
          if (userss[0].esAdmin) {
            location.href = "../Pages/admin.html"; // Redirigir al usuario administrador
          }}
function cerrarsesion(){
  localStorage.removeItem("loggeduser")
}