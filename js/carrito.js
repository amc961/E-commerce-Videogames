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
    <input type='number' class='w-50' name='cantidad' id='${prod.idJuego}'>
    </td>
    <td>${prod.precio}</td>
    <td id='${totaltotal}'<>0</td>
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
    console.log(totalinput)
    resultado = resultado + totalinput
    totalfinal.innerText=resultado
}


 function alertcompra() {
    if (resultado > 0){
        alert('Gracias por tu compra!')
    }
    else {
        alert('No tienes cosas por comprar :(')
    }
 }


