//Variables
contador = 0;
nubeContador = 0;
nubeContador2 = 0;
contadoraccion = 0;
var movi;
var minubefinal = "./nubes/nubepiedra.png";
var enemigofinal = "./nubes/nubepiedra.png";
var valor1 = 38;
var valor2 = 40;
nubes = ["./nubes/nubepiedra.png", "./nubes/nubemano.png", "./nubes/nubetijeras.png"];
//Movimiento 1 subir y bajar
function cambiarnpcs() {
    var alex = ["./Personajes/alex2.png", "./Personajes/alex1v2.png"];
    var mano = ["./Personajes/cabezamano1.png", "./Personajes/cabezamano2.png"]
    document.getElementById("alexbatalla").src = alex[contador];
    document.getElementById("cabezamanobatalla").src = mano[contador];
    contador++;
    if (contador == 2) contador = 0;

}
//Funcion cambiar nube del jugador
function cambiarnube() {
    // para saber el tipo de letra console.log(event.which);
    if (event.keyCode == valor1) {
        nubeContador++;
        if (nubeContador == 3) nubeContador = 0;
        minubefinal = nubes[nubeContador];
        document.getElementById("nube1ini").src = nubes[nubeContador];
    }
    if (event.keyCode == valor2) {
        nubeContador--;
        if (nubeContador == -1) nubeContador = 2;
        document.getElementById("nube1ini").src = nubes[nubeContador];
        minubefinal = nubes[nubeContador];
    }
}
//Funcion para cambiar aleatoriamente la eleccion del enemigo
function cambiarnube2() {
    var eleccion = Math.round(Math.random() * 2);
    document.getElementById("nube2ini").src = nubes[eleccion];
    enemigofinal = nubes[eleccion];
    if (eleccion == 3) eleccion = 0;
}
//Funcion para la acción de las manos
function movimientobrazo() {
    var alexaccion = ["./Personajes/alex2.png", "./Personajes/alex53.png", "./Personajes/alex2.png", "./Personajes/alex53.png",];
    var cabezaccion = ["./Personajes/cabezamanobracito.png", "./Personajes/cabezamanobracito2.png", "./Personajes/cabezamanobracito.png", "./Personajes/cabezamanobracito2.png",];
    document.getElementById("alexbatalla").src = alexaccion[contadoraccion];
    document.getElementById("cabezamanobatalla").src = cabezaccion[contadoraccion];
    contadoraccion++;
    if (contadoraccion == 4) contadoraccion = 0;
}
//Funcion para elegir quien gana.
function enviarEleccion() {
    setTimeout(function () {

        clearInterval(movi);
        valor1 = 1;
        valor2 = 1;
        switch (minubefinal) {
            case "./nubes/nubepiedra.png":
                document.getElementById("alexbatalla").src = "./Personajes/alexpiedra.png";
                if (enemigofinal == "./nubes/nubepiedra.png") {
                    document.getElementById("cabezamanobatalla").src = "./Personajes/cabezamanopiedra.png";
                    document.getElementById("ganascartel").src = "./fondo/empate.png";
                }
                if (enemigofinal == "./nubes/nubemano.png") {
                    document.getElementById("cabezamanobatalla").src = "./Personajes/cabezamanomano.png";
                    document.getElementById("ganascartel").src = "./fondo/pierdes.png";
                }
                if (enemigofinal == "./nubes/nubetijeras.png") {
                    document.getElementById("cabezamanobatalla").src = "./Personajes/cabezamanotijeras.png";
                    document.getElementById("ganascartel").src = "./fondo/ganas.png";
                }
                break;
            case "./nubes/nubemano.png":
                document.getElementById("alexbatalla").src = "./Personajes/alexpapel.png";
                if (enemigofinal == "./nubes/nubepiedra.png") {
                    document.getElementById("cabezamanobatalla").src = "./Personajes/cabezamanopiedra.png";
                    document.getElementById("ganascartel").src = "./fondo/ganas.png";
                }
                if (enemigofinal == "./nubes/nubemano.png") {
                    document.getElementById("cabezamanobatalla").src = "./Personajes/cabezamanomano.png";
                    document.getElementById("ganascartel").src = "./fondo/empate.png";
                }
                if (enemigofinal == "./nubes/nubetijeras.png") {
                    document.getElementById("cabezamanobatalla").src = "./Personajes/cabezamanotijeras.png";
                    document.getElementById("ganascartel").src = "./fondo/pierdes.png";
                }
                break;
            case "./nubes/nubetijeras.png":
                document.getElementById("alexbatalla").src = "./Personajes/alextijeras.png";
                if (enemigofinal == "./nubes/nubepiedra.png") {
                    document.getElementById("cabezamanobatalla").src = "./Personajes/cabezamanopiedra.png";
                    document.getElementById("ganascartel").src = "./fondo/pierdes.png";
                }
                if (enemigofinal == "./nubes/nubemano.png") {
                    document.getElementById("cabezamanobatalla").src = "./Personajes/cabezamanomano.png";
                    document.getElementById("ganascartel").src = "./fondo/ganas.png";
                }
                if (enemigofinal == "./nubes/nubetijeras.png") {
                    document.getElementById("cabezamanobatalla").src = "./Personajes/cabezamanotijeras.png";
                    document.getElementById("ganascartel").src = "./fondo/empate.png";
                }
                break;
            default:
                console.log("error");
                break;
        }
    }, 12300);
    //Si reiniciar partida en la tecla espacio.
}
function partidanueva() {
    if (event.keyCode == 32) window.location = "borrador.html";
}
//Intervalo de los movimientos de los npcs
var movimientonpcs = setInterval(function () { cambiarnpcs() }, 400);
//Intervalo cambiar la nube del enemigo
var cambiarini = setInterval(function () { cambiarnube2() }, 600);

//Para parar el movimiento de la nube del enemigo
setTimeout(function () { clearInterval(cambiarini) }, 12000);
setTimeout(function () {
    clearInterval(movimientonpcs);
    movi = setInterval(function () { movimientobrazo() }, 500);

}, 9000);
//Este time out es para que se actualice al final de la partida 
setTimeout(function () { window.location = "borrador.html" }, 16000);

//Se usamos el addEventListener para recoger cuando presionamos una tecla del teclado 
//mejor que con el onpresskey ya que este no recoge las flechas. El keydown significa cuando la tecla esta presionada.
window.addEventListener("keydown", function (event) {
    cambiarnube();
    partidanueva();
}, false);
enviarEleccion();