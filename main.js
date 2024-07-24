//BUSQUEDA DE UNIDADES 
const unidades = [
    {name:'dimension' , url:'.//pages/dimension.html'},
    {name:'area', url:'.//pages/dimension.html'},
    {name:'longitud' , url:'.//pages/dimension.html'},
    {name:'volumen' , url:'.//pages/dimension.html'},
    {name:'movimiento', url:'.//pages/movimiento.html'},
    {name:'aceleracion', url:'.//pages/movimiento.html'},
    {name:'velocidad' , url: './/pages/movimiento.html'},
    {name:'electricidad',  url:'.//pages/electricidad.html'},
    {name:'resistencia electrica', url:'.//pages/electricidad.html'},
    {name:'conductancia electrica', url:'.//pages/electricidad.html'},
    {name:'potencial electrico', url:'.//pages/electricidad.html'},
    {name:'energia', url:'.//pages/energia.html'},
    {name:'potencia', url:'.//pages/energia.html'},
    {name:'temperatura' ,url:'.//pages/energia.html'},
    {name:'quimica', url:'.//pages/quimica.html'},
    {name:'densidad', url:'.//pages/quimica.html'},
    {name:'masa molar' ,url:'.//pages/quimica.html'},
    {name:'tiempo', url:'.//pages/tiempo.html'},
    {name:'nanosegundos' , url:'.//pages/tiempo.html'},
    {name:'microsegundos' , url:'.//pages/tiempo.html'},
    {name:'milisegundos' , url:'.//pages/tiempo.html'},
    {name:'segundos' , url:'.//pages/tiempo.html'},
    {name:'minutos' , url:'.//pages/tiempo.html'},
    {name:'horas' , url:'.//pages/tiempo.html'},
    {name:'dias' , url:'.//pages/tiempo.html'},
    {name:'semanas' , url:'.//pages/tiempo.html'}
]



let entradaUnidad = document.getElementById('entradaUnidad')
let searchResults = document.getElementById('searchResults')


entradaUnidad.addEventListener('input', e =>{
    let valorUnidad = e.target.value.toLowerCase()
    searchResults.innerHTML=''

    let busquedaItems = unidades.filter (item => item.name.toLowerCase().includes(valorUnidad))

    if (busquedaItems.length > 0){
        busquedaItems.forEach(unidad =>{
            let contenedorResultados = document.createElement('div')
            contenedorResultados.classList.add('searchResultItem')
            contenedorResultados.innerHTML =  `<a href="${unidad.url}">${unidad.name}</a>`
            searchResults.appendChild(contenedorResultados)
        }     
        )
    } else{
        let contenedorResultados = document.createElement('div')
            contenedorResultados.classList.add('searchResultItem')
            contenedorResultados.innerHTML =  `<p> NO SE ENCONTRO LA UNIDAD DESEADA </p>`
            searchResults.appendChild(contenedorResultados)
    }
})


//CONVERSOR PARA UNIDADES DE DIMENSION
//CONVERSOR PARA UNIDADES DE TIEMPO

let resultadoTextual = document.getElementById('resultado')


let valor = document.getElementById('valor')
valor.addEventListener('keyup' , convertir)
valor.addEventListener('change' , convertir)

let entradaSelect = document.getElementById('entradaSelect')
entradaSelect.addEventListener('change', convertir)

let salidaSelect = document.getElementById('salidaSelect')
salidaSelect.addEventListener('change', convertir)

let resultado


function convertir (){
    if (valor.value == ''){
        return
    }

    let numero = valor.value
    numero= parseFloat(numero)

    if (entradaSelect.value == salidaSelect.value){
        resultado = numero * 1
        resultadoTextual.innerHTML= numero + " " +  entradaSelect.value+ " equivalen a " + resultado + " " + entradaSelect.value
    }else if ( entradaSelect.value == "Nanosegundos" && salidaSelect.value == "Microsegundos"){
        resultado = numero / 1000
        resultadoTextual.innerHTML= numero + " " +  entradaSelect.value+ " equivalen a " + resultado + " " + salidaSelect.value
    } else if( entradaSelect.value == "Microsegundos" && salidaSelect.value == "Nanosegundos"){
        resultado = numero * 1000
        resultadoTextual.innerHTML= numero + " " +  entradaSelect.value+ " equivalen a " + resultado + " " + salidaSelect.value
    } else if  ( entradaSelect.value == "Nanosegundos" && salidaSelect.value == "Milisegundos"){
        resultado = numero / 1000000
        resultadoTextual.innerHTML= numero + " " +  entradaSelect.value+ " equivalen a " + resultado + " " + salidaSelect.value
    } else if ( entradaSelect.value == "Milisegundos" && salidaSelect.value == "Nanosegundos") {
        resultado = numero * 1000000
        resultadoTextual.innerHTML= numero + " " +  entradaSelect.value+ " equivalen a " + resultado + " " + salidaSelect.value
    }else if ( entradaSelect.value == "Nanosegundos" && salidaSelect.value == "Segundos") {
        resultado = numero / 1000000000
        resultadoTextual.innerHTML= numero + " " +  entradaSelect.value+ " equivalen a " + resultado + " " + salidaSelect.value
    }else if ( entradaSelect.value == "Segundos" && salidaSelect.value == "Nanosegundos") {
        resultado = numero * 1000000000
        resultadoTextual.innerHTML= numero + " " +  entradaSelect.value+ " equivalen a " + resultado + " " + salidaSelect.value
    }else if ( entradaSelect.value == "Nanosegundos" && salidaSelect.value == "Minutos"){
        resultado = numero / 60000000000
        resultadoTextual.innerHTML= numero + " " +  entradaSelect.value+ " equivalen a " + resultado + " " + salidaSelect.value
    }else if ( entradaSelect.value == "Minutos" && salidaSelect.value == "Nanosegundos"){
        resultado = numero * 60000000000
        resultadoTextual.innerHTML= numero + " " +  entradaSelect.value+ " equivalen a " + resultado + " " + salidaSelect.value
    }else if ( entradaSelect.value == "Nanosegundos" && salidaSelect.value == "Horas") {
        resultado = numero / 3600000000000
        resultadoTextual.innerHTML= numero + " " +  entradaSelect.value+ " equivalen a " + resultado + " " + salidaSelect.value
    } else if ( entradaSelect.value == "Horas" && salidaSelect.value == "Nanosegundos") {
        resultado = numero * 3600000000000
        resultadoTextual.innerHTML= numero + " " +  entradaSelect.value+ " equivalen a " + resultado + " " + salidaSelect.value
    }else if( entradaSelect.value == "Nanosegundos" && salidaSelect.value == "Dias"){
        resultado = numero / 86400000000000
        resultadoTextual.innerHTML= numero + " " +  entradaSelect.value+ " equivalen a " + resultado + " " + salidaSelect.value
    }else if( entradaSelect.value == "Dias" && salidaSelect.value == "Nanosegundos"){
            resultado = numero * 86400000000000
            resultadoTextual.innerHTML= numero + " " +  entradaSelect.value+ " equivalen a " + resultado + " " + salidaSelect.value
    }else if ( entradaSelect.value == "Nanosegundos" && salidaSelect.value == "Semanas"){
        resultado = numero / 604800000000000
        resultadoTextual.innerHTML= numero + " " +  entradaSelect.value+ " equivalen a " + resultado + " " + salidaSelect.value
    }else if ( entradaSelect.value == "Semanas" && salidaSelect.value == "Nanosegundos"){
        resultado = numero * 604800000000000
        resultadoTextual.innerHTML= numero + " " +  entradaSelect.value+ " equivalen a " + resultado + " " + salidaSelect.value
    } 

}




let respuestasRecientes;

function manejarRespuestas() {
    respuestasRecientes = document.getElementById('respuestasRecientes');


    let resultadoTextual = document.getElementById('resultado');
    let resultadoActual = resultadoTextual.innerHTML;


    let respuestasGuardadas = sessionStorage.getItem('respuestasRecientes');


    let nuevoContenido = resultadoActual + "<br>" + (respuestasGuardadas || "");


    sessionStorage.setItem('respuestasRecientes', nuevoContenido);

    respuestasRecientes.innerHTML = nuevoContenido;
}

valor.addEventListener('change' , manejarRespuestas)