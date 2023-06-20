const CarritoLS = JSON.parse(localStorage.getItem('carrito'))
const tBody = document.getElementById('tableBody')

CarritoLS.forEach((prod) =>  {

const tr =document.createElement('tr')

let totaltotal = `total-${prod.idJuego}`

tr.innerHTML =
    
`   
<tr>
    <td class="text-center">${prod.nombre}</td>
    <td>
    <input type='number' class='w-100 inputNumber' name='cantidad' id='${prod.idJuego}'>
    </td>
    <td class="text-center">${prod.precio}</td>
    <td class="text-center" id='${totaltotal}' class="totale">0</td>
    <td><button type="button"
      class="container close" id="${prod.idJuego}"
      onclick="quitar()">X</button></td>
</tr>
`
tBody.appendChild(tr)

const input = document.getElementById(prod.idJuego)
input.addEventListener('input', (ev) => changeinput(ev, prod.precio, totaltotal))
}
)


let totalinput = 0

let resultado = 0
const totalfinal =document.getElementById('totalfinal')

const changeinput = (event, precio, totaltotal) => {
    const total = document.getElementById(totaltotal)
    const {name, value, idJuego} = event.target
    totalinput = precio * value
    total.innerText=totalinput
    sumatoriaNumeros()

}


 function alertcompra() {
    if (resultado > 0){
        alert('Gracias por tu compra!')
    }
    else {
        alert('No tienes cosas por comprar :(')
     
    }
 }


 const sumatoriaNumeros = () =>{
    let sumatoria = 0
    let totales = document.getElementsByClassName("totale")
    for(let i = 0; i < totales.length; i++){
        sumatoria  = sumatoria + parseInt(totales[i].innerHTML)
    }
    resultado = sumatoria
    totalfinal.innerHTML = sumatoria
}



function quitar() {
    const boton = event.target; // Obtener el botón que se ha hecho clic
    const idJuego = boton.id; // Obtener el idJuego del botón
  
     const fila = boton.parentNode.parentNode;
     fila.remove();  

    CarritoLS.splice(idJuego-1,1)
    console.log(CarritoLS)
    localStorage.setItem('carrito',JSON.stringify(CarritoLS))
  }