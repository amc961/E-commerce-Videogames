let userss = JSON.parse(localStorage.getItem('loggeduser')); // Obtener los usuarios del localStorage y convertirlos a objeto

function verificacionuser(){
  if(userss[0]){
    if (userss[0].esAdmin) {
      location.href = "../Pages/admin.html"; // Redirigir al usuario administrador
          }
        } else {
          location.href = '../Pages/login.html'; // Redirigir al usuario no Logueado        
        }
      }
function cerrarsesion(){
  localStorage.removeItem("loggeduser")
}