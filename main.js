document.addEventListener('DOMContentLoaded', (event) => {
    //API
    fetch('https://api.math.tools/numbers/nod?lang=es')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la red');
        }
        return response.json(); 
    })
    .then(data => {
        //conversiones
        const numero = data.contents.nod.numbers.number|| {};
        const roman = data.contents.nod.numbers.numerals.roman ? data.contents.nod.numbers.numerals.roman.display : "N/A";
        const chinese = data.contents.nod.numbers.numerals.chinese ? data.contents.nod.numbers.numerals.chinese.display : "N/A";
        const egyptian = data.contents.nod.numbers.numerals.egyptian ? data.contents.nod.numbers.numerals.egyptian.display : "N/A";
        const babylonian = data.contents.nod.numbers.numerals.babylonian ? data.contents.nod.numbers.numerals.babylonian.display : "N/A";

        document.getElementById('numeroAleatorio').innerText =  numero;
        document.getElementById('conversionRomanos').innerHTML = "Su conversion al numeral Romano es: " + roman;
        document.getElementById('conversionChino').innerHTML = "Su conversion al numeral Chino es: " + chinese;
        document.getElementById('conversionEgipcio').innerHTML = "Su conversion al numeral Egipcio es: " + egyptian;
        document.getElementById('conversionBabilonio').innerHTML = "Su conversion al numeral Babilonio es: " + babylonian;

        //facts
        const generalFacts = data.contents.nod.numbers["general-facts"] || {};
                const odd= generalFacts.odd.display ? generalFacts.odd.display : "N/A";
                const even = generalFacts.even ? generalFacts.even.display : "N/A";
                const palindrome= generalFacts.palindrome ? generalFacts.palindrome.display : "N/A";
                const triangle = generalFacts.triangle ? generalFacts.triangle.display : "N/A";

                document.getElementById('odd').innerHTML = odd
                document.getElementById('even').innerHTML = even
                document.getElementById('palindrome').innerHTML =palindrome
                document.getElementById('triangle').innerHTML = triangle

        const primeFacts = data.contents.nod.numbers["prime-facts"] || {};
                const prime = primeFacts.prime ? primeFacts.prime.display : "N/A";
                const perfect = primeFacts.perfect ? primeFacts.perfect.display : "N/A";
                const mersenne = primeFacts.mersenne ? primeFacts.mersenne.display : "N/A";
                const fermat = primeFacts.fermat ? primeFacts.fermat.display : "N/A";
                const fibonacci = primeFacts.fibonacci ? primeFacts.fibonacci.display : "N/A";
                const partition = primeFacts.partition ? primeFacts.partition.display : "N/A";
                const pell = primeFacts.pell ? primeFacts.pell.display : "N/A";
            
                document.getElementById('prime').innerHTML = prime;
                document.getElementById('perfect').innerHTML = perfect;
                document.getElementById('mersenne').innerHTML = mersenne;
                document.getElementById('fermat').innerHTML = fermat;
                document.getElementById('fibonacci').innerHTML = fibonacci;
                document.getElementById('partition').innerHTML = partition;
                document.getElementById('pell').innerHTML = pell;


    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('numeroAleatorio').innerText = "Error al cargar el número.";
        document.getElementById('conversionRomanos').innerText = "";
        document.getElementById('conversionChino').innerText = "";
        document.getElementById('conversionEgipcio').innerText = "";
        document.getElementById('conversionBabilonio').innerText = "";
        document.getElementById('odd').innerText = "N/A";
        document.getElementById('even').innerText = "N/A";
        document.getElementById('palindrome').innerText = "N/A";
        document.getElementById('triangle').innerText = "N/A";
        document.getElementById('prime').innerText = "N/A";
        document.getElementById('perfect').innerText = "N/A";
        document.getElementById('mersenne').innerText = "N/A";
        document.getElementById('fermat').innerText = "N/A";
        document.getElementById('fibonacci').innerText = "N/A";
        document.getElementById('partition').innerText = "N/A";
        document.getElementById('pell').innerText = "N/A";
    });






    //BUSQUEDA DE UNIDADES 
    const unidades = [
        {name:'dimension' , url:'.//pages/dimension.html'},
        {name:'area', url:'.//pages/dimension.html'},
        {name:'kilometro cuadrado', url:'.//pages/dimension.html'},
        {name:'metro cuadrado', url:'.//pages/dimension.html'},
        {name:'milla cuadrada', url:'.//pages/dimension.html'},
        {name:'hectarea', url:'.//pages/dimension.html'},
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
    ];

    let entradaUnidad = document.getElementById('entradaUnidad');
    let searchResults = document.getElementById('searchResults');

    if (entradaUnidad && searchResults) {
        entradaUnidad.addEventListener('input', e => {
            let valorUnidad = e.target.value.toLowerCase();
            searchResults.innerHTML='';

            let busquedaItems = unidades.filter(item => item.name.toLowerCase().includes(valorUnidad));

            if (busquedaItems.length > 0) {
                busquedaItems.forEach(unidad => {
                    let contenedorResultados = document.createElement('div');
                    contenedorResultados.classList.add('searchResultItem');
                    contenedorResultados.innerHTML = `<a href="${unidad.url}">${unidad.name}</a>`;
                    searchResults.appendChild(contenedorResultados);
                });
            } else {
                let contenedorResultados = document.createElement('div');
                contenedorResultados.classList.add('searchResultItem');
                contenedorResultados.innerHTML = `<p>NO SE ENCONTRO LA UNIDAD DESEADA</p>`;
                searchResults.appendChild(contenedorResultados);
            }
        });
    }

    // CONVERSOR PARA UNIDADES DE TIEMPO

    let resultadoTextual = document.getElementById('resultado');

    let valor = document.getElementById('valor');
    if (valor) {
        valor.addEventListener('keyup', convertir);
        valor.addEventListener('change', convertir);
    }

    let entradaSelect = document.getElementById('entradaSelect');
    if (entradaSelect) {
        entradaSelect.addEventListener('change', convertir);
    }

    let salidaSelect = document.getElementById('salidaSelect');
    if (salidaSelect) {
        salidaSelect.addEventListener('change', convertir);
    }

let resultado;

function convertir() {
    if (!valor.value) {
        return;
    }

    let numero = parseFloat(valor.value);

    if (entradaSelect.value === salidaSelect.value) {
        resultado = numero * 1;
    } else if (entradaSelect.value === "Nanosegundos" && salidaSelect.value === "Microsegundos") {
        resultado = numero / 1000;
    } else if (entradaSelect.value === "Microsegundos" && salidaSelect.value === "Nanosegundos") {
        resultado = numero * 1000;
    } else if(entradaSelect.value === "Microsegundos" && salidaSelect.value === "Milisegundos"){
        resultado = numero / 1000
    } else if(entradaSelect.value === "Microsegundos" && salidaSelect.value === "Segundos"){
        resultado = numero / 1000000
    } else if(entradaSelect.value === "Microsegundos" && salidaSelect.value === "Minutos"){
        resultado = numero / 60000000
    } else if(entradaSelect.value === "Microsegundos" && salidaSelect.value === "Horas"){
        resultado = numero / 3600000000
    }else if (entradaSelect.value === "Nanosegundos" && salidaSelect.value === "Milisegundos") {
        resultado = numero / 1000000;
    } else if (entradaSelect.value === "Milisegundos" && salidaSelect.value === "Nanosegundos") {
        resultado = numero * 1000000;
    } else if (entradaSelect.value === "Milisegundos" && salidaSelect.value === "Microsegundos") {
        resultado = numero * 1000;
    } else if (entradaSelect.value === "Milisegundos" && salidaSelect.value === "Segundos") {
        resultado = numero / 1000;
    } else if (entradaSelect.value === "Milisegundos" && salidaSelect.value === "Minutos") {
        resultado = numero / 60000;
    } else if (entradaSelect.value === "Milisegundos" && salidaSelect.value === "Horas") {
        resultado = numero / 3600000;
    } else if (entradaSelect.value === "Nanosegundos" && salidaSelect.value === "Segundos") {
        resultado = numero / 1000000000;
    } else if (entradaSelect.value === "Segundos" && salidaSelect.value === "Nanosegundos") {
        resultado = numero * 1000000000;
    } else if (entradaSelect.value === "Segundos" && salidaSelect.value === "Microsegundos") {
        resultado = numero * 1000000;
    } else if (entradaSelect.value === "Segundos" && salidaSelect.value === "Milisegundo") {
        resultado = numero * 1000;
    } else if (entradaSelect.value === "Segundos" && salidaSelect.value === "Minutos") {
        resultado = numero / 60;
    } else if (entradaSelect.value === "Segundos" && salidaSelect.value === "Horas") {
        resultado = numero / 3600;
    } else if (entradaSelect.value === "Nanosegundos" && salidaSelect.value === "Minutos") {
        resultado = numero / 60000000000;
    } else if (entradaSelect.value === "Minutos" && salidaSelect.value === "Nanosegundos") {
        resultado = numero * 60000000000;
    } else if (entradaSelect.value === "Minutos" && salidaSelect.value === "Microsegundos") {
        resultado = numero * 60000000;
    } else if (entradaSelect.value === "Minutos" && salidaSelect.value === "Milisegundos") {
        resultado = numero * 60000;
    } else if (entradaSelect.value === "Minutos" && salidaSelect.value === "Segundos") {
        resultado = numero * 60;
    } else if (entradaSelect.value === "Minutos" && salidaSelect.value === "Horas") {
        resultado = numero / 60;
    } else if (entradaSelect.value === "Nanosegundos" && salidaSelect.value === "Horas") {
        resultado = numero / 3600000000000;
    } else if (entradaSelect.value === "Horas" && salidaSelect.value === "Nanosegundos") {
        resultado = numero * 3600000000000;
    } else if (entradaSelect.value === "Horas" && salidaSelect.value === "Microsegundos") {
        resultado = numero * 3600000000;
    } else if (entradaSelect.value === "Horas" && salidaSelect.value === "Milisegundos") {
        resultado = numero * 3600000;
    } else if (entradaSelect.value === "Horas" && salidaSelect.value === "Segundos") {
        resultado = numero * 3600;
    } else if (entradaSelect.value === "Horas" && salidaSelect.value === "Minutos") {
        resultado = numero * 60;
    } 

    resultadoTextual.innerHTML = numero + " " + entradaSelect.value + " equivalen a " + resultado + " " + salidaSelect.value;
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

if (valor) {
    valor.addEventListener('change', manejarRespuestas);
}

let botonBorrarTiempo = document.getElementById('borrarRtasTiempo');
    if (botonBorrarTiempo) {
        botonBorrarTiempo.addEventListener('click', () => {
            Swal.fire({
                title: "¿Estás seguro que quieres borrar las respuestas recientes?",
                text: "¡No podrás recuperarlas!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Sí, borrar",
                cancelButtonText: "No, cancelar",
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    sessionStorage.removeItem('respuestasRecientes');
                    let respuestasRecientesTiempo = document.getElementById('respuestasRecientes');
                    respuestasRecientesTiempo.innerHTML = '';
                    Swal.fire("¡Borrado!", "Las respuestas recientes han sido eliminadas.", "success");
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire("Cancelado", "Tus respuestas están a salvo :)", "error");
                }
            });
        });
    }


//CONVERSION UNIDADES DE DIMENSION AREA

let resultadoArea = document.getElementById("resultadoArea")


let valorArea = document.getElementById("valorArea")
if (valorArea){
    valorArea.addEventListener('keyup', convertirArea)
    valorArea.addEventListener('change', convertirArea)
}

let entradaArea = document.getElementById("entradaArea")
if(entradaArea){
    entradaArea.addEventListener('change', convertirArea)
}
let salidaArea = document.getElementById("salidaArea")
if (salidaArea){
    salidaArea.addEventListener('change', convertirArea)
}



let resultadoNum

function convertirArea(){
    if (valorArea.value == ''){
        return
    }

    let numArea = valorArea.value
    numArea = parseFloat(numArea)

    if (entradaArea.value == salidaArea.value){
        resultadoNum = numArea * 1
    } else if (entradaArea.value == "KilometroCuadrado" && salidaArea.value == "Hectarea"){
        resultadoNum = numArea * 100
    } else if (entradaArea.value == "Hectarea" && salidaArea.value == "KilometroCuadrado"){
        resultadoNum = numArea / 100
    } else if (entradaArea.value == "KilometroCuadrado" && salidaArea.value == "MetroCuadrado"){
        resultadoNum = numArea * 1000000
    } else if(entradaArea.value == "MetroCuadrado" && salidaArea.value == "KilometroCuadrado"){
        resultadoNum= numArea / 1000000
    } else if (entradaArea.value == "KilometroCuadrado" && salidaArea.value == "MillaCuadrada"){
        resultadoNum = numArea / 2.59
    } else if (entradaArea.value == "MillaCuadrada" && salidaArea.value == "KilometroCuadrado"){
        resultadoNum = numArea * 2.59
    } else if (entradaArea.value == "MetroCuadrado" && salidaArea.value == "Hectarea"){
        resultadoNum = numArea / 10000
    } else if (entradaArea.value == "Hectarea" && salidaArea.value == "MetroCuadrado"){
        resultadoNum = numArea * 10000
    } else if (entradaArea.value == "MetroCuadrado" && salidaArea.value == "MillaCuadrada"){
        resultadoNum = numArea / 2590000
    } else if (entradaArea.value == "MillaCuadrada" && salidaArea.value == "MetroCuadrado"){
        resultadoNum = numArea * 2590000
    } else if (entradaArea.value == "MillaCuadrada" && salidaArea.value == "Hectarea"){
        resultadoNum = numArea * 259
    } else if (entradaArea.value == "Hectarea" && salidaArea.value == "MillaCuadrada"){
        resultadoNum = numArea / 259
    }

    return resultadoArea.innerHTML= numArea + " " +  entradaArea.value+ " equivalen a " + resultadoNum + " " + salidaArea.value
}

let respuestasRecientesArea;

function manejarRespuestasArea() {
    respuestasRecientesArea = document.getElementById('respuestasRecientesArea');


    let resultadoArea = document.getElementById('resultadoArea');
    let resultadoActualArea = resultadoArea.innerHTML;


    let respuestasGuardadasArea = sessionStorage.getItem('respuestasRecientesArea');


    let nuevoContenidoArea = resultadoActualArea + "<br>" + (respuestasGuardadasArea || "");


    sessionStorage.setItem('respuestasRecientesArea', nuevoContenidoArea);

    respuestasRecientesArea.innerHTML = nuevoContenidoArea;
}

if(valorArea){
    valorArea.addEventListener('change' , manejarRespuestasArea)
}



    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    let botonBorrar = document.getElementById('borrarRtas');
    if (botonBorrar) {
        botonBorrar.addEventListener('click', ()=> {
            swalWithBootstrapButtons.fire({
                title: "Estas seguro que quieres borrar las respuesas recientes?",
                text: "No podras recuperarlas!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Si, borrar!",
                cancelButtonText: "No, cancelar!",
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    if(respuestasRecientesArea){
                         sessionStorage.removeItem('respuestasRecientesArea')
                        respuestasRecientesArea.innerHTML = ''
                        swalWithBootstrapButtons.fire({
                            title: "Borrado!",
                            text: "Las respuestas recientes han sido eliminadas.",
                            icon: "success"
                        });
                    }else{
                        swalWithBootstrapButtons.fire({
                            title: "OPS!",
                            text: "No tienes respuestas guardadas aun.",
                            icon: "error"
                        });
                    }
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire({
                        title: "Cancelado",
                        text: "Tus respuestas estan a salvo :)",
                        icon: "error"
                    });
                }
            });
        });
    }

//CONVERSION UNIDADES DE DIMENSION LONGITUD

let resultadoLongitud = document.getElementById("resultadoLongitud")


let valorLongitud = document.getElementById("valorLongitud")
if (valorLongitud){
    valorLongitud.addEventListener('keyup', convertirLongitud)
    valorLongitud.addEventListener('change', convertirLongitud)
}

let entradaLongitud = document.getElementById("entradaLongitud")
if(entradaLongitud){
    entradaLongitud.addEventListener('change', convertirLongitud)
}
let salidaLongitud = document.getElementById("salidaLongitud")
if (salidaLongitud){
    salidaLongitud.addEventListener('change', convertirLongitud)
}



let resultadoNumLongitud

function convertirLongitud(){
    if (valorLongitud.value == ''){
        return
    }

    let numLongitud = valorLongitud.value
    numLongitud = parseFloat(numLongitud)

    if (entradaLongitud.value == salidaArea.value){
        resultadoNumLongitud = numLongitud * 1
    } else if (entradaLongitud.value == "Kilometros" &&  salidaLongitud.value == "Metros"){
        resultadoNumLongitud = numLongitud * 1000
    } else if (entradaLongitud.value == "Kilometros" &&  salidaLongitud.value == "Centimetros"){
        resultadoNumLongitud= numLongitud * 100000
    } else if (entradaLongitud.value == "Kilometros" &&  salidaLongitud.value == "Milimetros"){
        resultadoNumLongitud= numLongitud * 1000000
    } else if(entradaLongitud.value == "Metros" &&  salidaLongitud.value == "Kilometros"){
        resultadoNumLongitud= numLongitud / 1000
    } else if (entradaLongitud.value == "Metros" &&  salidaLongitud.value == "Milimetros"){
        resultadoNumLongitud = numLongitud * 1000
    } else if (entradaLongitud.value == "Metros" &&  salidaLongitud.value == "Centimetros"){
        resultadoNumLongitud= numLongitud * 100
    } else if (entradaLongitud.value == "Centimetros" &&  salidaLongitud.value == "Kilometros"){
        resultadoNumLongitud =numLongitud/ 100000
    } else if (entradaLongitud.value == "Centimetros" &&  salidaLongitud.value == "Metros"){
        resultadoNumLongitud = numLongitud / 100
    } else if (entradaLongitud.value == "Centimetros" &&  salidaLongitud.value == "Milimetros"){
        resultadoNumLongitud = numLongitud * 10
    } else if (entradaLongitud.value == "Milimetros" &&  salidaLongitud.value == "Kilometros"){
        resultadoNumLongitud = numLongitud / 1000000
    } else if (entradaLongitud.value == "Milimetros" &&  salidaLongitud.value == "Metros"){
        resultadoNumLongitud= numLongitud / 1000
    } else if (entradaLongitud.value == "Milimetros" &&  salidaLongitud.value == "Centimetros"){
        resultadoNumLongitud= numLongitud / 10
    }

    return resultadoLongitud.innerHTML= numLongitud + " " + entradaLongitud.value+ " equivalen a " + resultadoNumLongitud + " " +  salidaLongitud.value
}

let respuestasRecientesLongitud;

function manejarRespuestasLongitud() {
    respuestasRecientesLongitud = document.getElementById('respuestasRecientesLongitud');


    let resultadoLongitud = document.getElementById('resultadoLongitud');
    let resultadoActualLongitud = resultadoLongitud.innerHTML;


    let respuestasGuardadasLongitud = sessionStorage.getItem('respuestasRecientesLongitud');


    let nuevoContenidoLongitud = resultadoActualLongitud + "<br>" + (respuestasGuardadasLongitud || "");


    sessionStorage.setItem('respuestasRecientesLongitud', nuevoContenidoLongitud);

    respuestasRecientesLongitud.innerHTML = nuevoContenidoLongitud;
}

if(valorLongitud){
    valorLongitud.addEventListener('change' , manejarRespuestasLongitud)
}



let botonBorrarLongitud = document.getElementById('borrarRtasLongitud');
if (botonBorrarLongitud) {
    botonBorrarLongitud.addEventListener('click', () => {
        Swal.fire({
            title: "¿Estás seguro que quieres borrar las respuestas recientes?",
            text: "¡No podrás recuperarlas!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, borrar",
            cancelButtonText: "No, cancelar",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                sessionStorage.removeItem('respuestasRecientesLongitud');
                let respuestasRecientesLongitud = document.getElementById('respuestasRecientesLongitud');
                respuestasRecientesLongitud.innerHTML = '';
                Swal.fire("¡Borrado!", "Las respuestas recientes han sido eliminadas.", "success");
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire("Cancelado", "Tus respuestas están a salvo :)", "error");
            }
        });
    });
}


})





