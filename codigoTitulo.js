var misfotos =["./fondo/eltitulo.png","./fondo/nadando.png","./fondo/lancha.png","./fondo/arbol.png","./fondo/volando.png","./fondo/salto.png","./fondo/start.png"];
var letras = ["./fondo/eltitulo2.2.png","./fondo/eltitulo3.3.png","./fondo/eltitulo2.2.png","./fondo/eltitulo.png"];
var nombre;
contador=0;
contadorL=0;
tiempo=1000;
for(var i=0;i<misfotos.length;i++){
    setTimeout(function(){
        var foto=document.createElement("img");
        foto.src=misfotos[contador];
        document.getElementById("contenedor").appendChild(foto);
        contador++;
        nombre="foto"+contador;
        foto.classList.add(nombre);
        console.log(nombre);
        
    },tiempo);
    tiempo+=500;
}
function cambiarLetras(){
    document.getElementsByClassName("foto1")[0].src=letras[contadorL];
    contadorL++;
    if(contadorL==letras.length) contadorL=0;
}

setTimeout(function(){setInterval(function () { cambiarLetras() }, 100);},5000);
function reenviar() { window.location = "cargar.html"; }

setTimeout(function(){
    window.addEventListener("keydown", function (event) {
        reenviar();
    }, false);
},5000);
