const sumatoriaNumeros = () =>{
    let sumatoria = 0
    let totales = document.getElementsByClassName("totale")
    let inputs = document.getElementsByClassName("inputNumber")
    for(let i = 0; i < totales.length; i++){
        sumatoria  = sumatoria + (totales[i].value * inputs[i].value)
    }
}
