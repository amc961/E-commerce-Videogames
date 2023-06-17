let userss = JSON.parse(localStorage.getItem('loggeduser')); // Obtener los usuarios del localStorage y convertirlos a objeto

function verificacionadmin(){
if (userss[0].esAdmin === false) {
  location.href = '../Pages/usuarioLogueado.html'; // Redirigir al usuario no administrador
          }
        }
function cerrarsesion(){
  localStorage.removeItem("loggeduser")
}