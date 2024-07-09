
//CONVERSOR PARA UNIDADES DE TIEMPO

let resultadoTextual = document.getElementById("resultado")

let valor = document.getElementById("valor")
valor.addEventListener('keyup', convertir)
valor.addEventListener("change", convertir)

let entradaSelect = document.getElementById('entradaSelect')
entradaSelect.addEventListener('change', convertir)

let salidaSelect = document.getElementById("salidaSelect")
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
    respuestasRecientes = document.getElementById("respuestasRecientes");


    let resultadoTextual = document.getElementById("resultado");
    let resultadoActual = resultadoTextual.innerHTML;


    let respuestasGuardadas = sessionStorage.getItem('respuestasRecientes');


    let nuevoContenido = resultadoActual + "<br>" + (respuestasGuardadas || "");


    sessionStorage.setItem('respuestasRecientes', nuevoContenido);

    respuestasRecientes.innerHTML = nuevoContenido;
}

valor.addEventListener('change' , manejarRespuestas)