///relaciono los elementos del HTML que voy a manipular mediante java-script
///relaciono los botones
const piedra = document.querySelector('.piedra');
const papel = document.querySelector('.papel');
const tijera = document.querySelector('.tijera');
const jugar = document.querySelector('.jugar');

const resultado = document.querySelector('.resultado');
const resultado_letrero = document.querySelector('.resultado_letrero');

///aqui....
const imagen_opcion = document.querySelector('.imagen_opcion');
const imagencita_opcion = document.createElement('img');
imagencita_opcion.style.height = '100%';

///aqui....
const imagen_maquina = document.querySelector('.imagen_maquina');
const imagencita_maquina = document.createElement('img');
imagencita_maquina.style.height = '100%';

///declaro la variable opcion que contendra la opcion que escogemos
var opcion;

///genero valores aleatorios de la maquina
function generateRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (1 + max - min) + min);
}

///asignar valores aleatorios a la variable maquina con la que compites
var maquina = generateRandom(1, 3);

///me aseguro de solo mostrar la imagen cuando el usuario haya escogido una opcion
function graficar_maquina(maquina){
    ///genero la imagen de la opcion que elige la maquina
    if(parseInt(maquina) == 1){
        imagencita_maquina.setAttribute('src', './piedra.png');
        imagen_maquina.append(imagencita_maquina);
    }

    if(parseInt(maquina) == 2){
        imagencita_maquina.setAttribute('src', './papel.png');
        imagen_maquina.append(imagencita_maquina);
    }

    if(parseInt(maquina) == 3){
        imagencita_maquina.setAttribute('src', './tijera.png');
        imagen_maquina.append(imagencita_maquina);
    }
}

///escucho los botones con las distintas opciones: PIEDRA, PAPEL o TIJERA
function piedra1(){
    opcion = 1;
    imagencita_opcion.setAttribute('src', './piedra_maquina.png');
    imagen_opcion.append(imagencita_opcion);
    imagen_maquina.removeChild(imagencita_maquina);
}

function papel2(){
    opcion = 2;
    imagencita_opcion.setAttribute('src', './papel_maquina.png');
    imagen_opcion.append(imagencita_opcion);
    imagen_maquina.removeChild(imagencita_maquina);
}

function tijera3(){
    opcion = 3;
    imagencita_opcion.setAttribute('src', './tijera_maquin.png');
    imagen_opcion.append(imagencita_opcion);
    imagen_maquina.removeChild(imagencita_maquina);
}

///////////aqui determino al ganador teniendo en cuenta todas las combinaciones de resultados posibles
function verificar() {           
    if (parseInt(opcion) == 1 && maquina == 3) {            
        resultado_letrero.innerHTML = 'la maquina escogio: TIJERAS y tu escogiste: PIEDRA ¡¡¡FELICIDADES GANASTE!!!..  :D ';
        resultado.style.backgroundColor = '#39C417';
        resultado.style.border = '5px solid black';
        graficar_maquina(maquina);//elimino la imagen escogida por la maquina para que nuevamente vuelva a ser desconocida su eleccion y se pueda apostar de nuevo
    }
    if (parseInt(opcion) == 1 && maquina == 2) {
        resultado_letrero.innerHTML = 'la maquina escogio: PAPEL y tu escogiste: PIEDRA perdiste, vuelve a intentarlo ';
        resultado.style.backgroundColor = '#FF2C2C';
        resultado.style.border = '5px solid black';
        graficar_maquina(maquina);
    }
    if (parseInt(opcion) == 2 && maquina == 1) {
        resultado_letrero.innerHTML = 'la maquina escogio: PIEDRA y tu escogiste: PAPEL ¡¡¡FELICIDADES GANASTE!!!..  :D ';
        resultado.style.backgroundColor = '#39C417';
        resultado.style.border = '5px solid black';
        graficar_maquina(maquina);
    }
    if (parseInt(opcion) == 2 && maquina == 3) {
        resultado_letrero.innerHTML = 'la maquina escogio: TIJERAS y tu escogiste: PAPEL perdiste, vuelve a intentarlo ';
        resultado.style.backgroundColor = '#FF2C2C';
        resultado.style.border = '5px solid black';
        graficar_maquina(maquina);
    }
    if (parseInt(opcion) == 3 && maquina == 1) {
        resultado_letrero.innerHTML = 'la maquina escogio: PIEDRA y tu escogiste: TIJERAS perdiste, vuelve a intentarlo ';
        resultado.style.backgroundColor = '#FF2C2C';
        resultado.style.border = '5px solid black';
        graficar_maquina(maquina);
    }
    if (parseInt(opcion) == 3 && maquina == 2) {
        resultado_letrero.innerHTML = 'la maquina escogio: PAPEL  y tu escogiste: TIJERAS ¡¡¡FELICIDADES GANASTE!!!..  :D ';
        resultado.style.backgroundColor = '#39C417';
        resultado.style.border = '5px solid black';
        graficar_maquina(maquina);
    }
    if (parseInt(opcion) == maquina) {
        resultado_letrero.innerHTML = 'la maquina escogio tu misma opcion, ¡¡¡Has empatado!!!';
        resultado.style.backgroundColor = '#CECBCB';
        resultado.style.border = '5px solid black';
        graficar_maquina(maquina);
    }

    ///reinicio los valores que la maquina escogio
    maquina = 0;
    maquina = generateRandom(1, 3);
}