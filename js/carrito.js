const CarritoLS = JSON.parse(localStorage.getItem('carrito'))
const tBody = document.getElementById('tBody')

CarritoLS.forEach((prod) =>  {

const tr =document.createElement('tr')

let totaltotal = `total-${prod.idJuego}`

tr.innerHTML =
    
`   
<tr>
    <td>${prod.nombre}</td>
    <td>
    <input type='number' value="0" class='w-50 inputNumber' name='cantidad' id='${prod.idJuego}'>
    </td>
    <td>${prod.precio}</td>
    <td id='${totaltotal}' class="totale" >0</td>
</tr>
`
tBody.appendChild(tr)

const input = document.getElementById(prod.idJuego)
input.addEventListener('change', (ev) => changeinput(ev, prod.precio, totaltotal))
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
    totalfinal.innerHTML = sumatoria
}
