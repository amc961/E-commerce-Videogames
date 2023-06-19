/*comienzo  favoritos /  */

const traerMeGusta = () => {
  let meGustaList = JSON.parse(localStorage.getItem("meGusta"));    //recupera el localstorage( id y nombre) 

  let tbody = document.getElementById("tBody");    //ejecuta el método en el click y se vacia
  tbody.innerHTML = "";                                 
  meGustaList.forEach(function (meGustaItem, index) {                  //recorre la lista de objetos guardada en el localst.
    let fila = document.createElement("tr");                                 //crea el tr( fila y luego agrega la celda)

    let celdaIdJuego = document.createElement("td");                    //crea elemento
    celdaIdJuego.textContent = meGustaItem.idJuego;
    fila.appendChild(celdaIdJuego);

    let celdaNombre = document.createElement("td");
    celdaNombre.textContent = meGustaItem.nombre;
    fila.appendChild(celdaNombre);


//boton con la funcionalidad
    let celdaBoton = document.createElement("td");      //                   
    let boton = document.createElement("button");
    boton.textContent = "Borrar";
  boton.className = "button-style"
    boton.addEventListener("click", function () {               
      borrarMeGusta(meGustaItem.idJuego);
      fila.remove(); // Elimina la fila de la vista
    });
    celdaBoton.appendChild(boton);
    fila.appendChild(celdaBoton);                                           

    tbody.appendChild(fila);
  });
};

const borrarMeGusta = (index) => {                                         //recupera lo guardado en el locals.
  let meGustaList = JSON.parse(localStorage.getItem("meGusta"));           //arreglo de objetos
  let juegofilter = meGustaList.filter((game) => game.idJuego.toString() !== index.toString())                                      // Elimina el elemento del array
  localStorage.setItem("meGusta", JSON.stringify(juegofilter));             // Actualiza el localStorage removiendo lo que ya no se necesita
};




