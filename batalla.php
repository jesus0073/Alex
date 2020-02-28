<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>AlexKidd</title>
    <style>
        body,
        html {
            margin: 0px;
            padding: 0px;
            width: 100%;
            height: 100%;
            background-color: #FFFFA3;
        }
        #titulo{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 2vw;
        }

        #fondo {
            background-image: url("campo.png");
            width: 1014px;
            height: 730px;
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-top: 3vw;

        }
        #alex{
            position: absolute;
            margin-top: 557px;
            margin-left: 140px;

        }
        #enemigo{
            position: absolute;
            margin-top: 523px;
            margin-left: 725px;

        }
        #nube2{
            position: absolute;
            margin-top: 270px;
            margin-left: 690px;

        }
        #nube1{
            position: absolute;
            margin-top: 270px;
            margin-left: 100px;

        }

        
    </style>
    <script type="text/javascript">
        contador = 0;
        nubeContador = 0;
        nubeContador2 =0;
        function cambiarnpcs() {
            var alex = ["alex2.png", "alex1v2.png"];
            var mano = ["cabezamano1.png", "cabezamano2.png"]
            document.getElementById("alexbatalla").src = alex[contador];
            document.getElementById("cabezamanobatalla").src = mano[contador];
            contador++;
            if (contador == 2) contador = 0;

        }
        function cambiarnube(){
            var nubes = ["nubepuño.png","nubetijeras.png","nubemano.png"];
            document.getElementById("nube1ini").src=nubes[nubeContador];
            console.log(event.which);
            if(event.keyCode==38) {
                nubeContador++;
                if (nubeContador == 3) nubeContador = 0;
                document.getElementById("nube1ini").src=nubes[nubeContador];
            }
            if(event.keyCode==40) {
                nubeContador--;
                if (nubeContador == -1) nubeContador = 2;
                document.getElementById("nube1ini").src=nubes[nubeContador];
            }
        }
        function cambiarnube2(){
            var nubes = ["nubepuño.png","nubetijeras.png","nubemano.png"];
            document.getElementById("nube2ini").src=nubes[nubeContador2];
            nubeContador2++;
            if (nubeContador2 == 3) nubeContador2 = 0;

        }
        function enviarEleccion(){
            if(event.code=13);
        }
        setInterval(function() {cambiarnpcs()}, 400);
        setInterval(function() {cambiarnube2()}, 500);
        window.addEventListener("keydown", function (event) {
            cambiarnube();
        },false);
    </script>
</head>

<body  style="overflow:hidden">
    <div id="titulo">
        <img src="nombre.png" alt="titulo">
    </div>
    <div id="fondo">
        <div id="alex">
            <img id="alexbatalla" src="alex1v2.png" alt="alex">
        </div>
        <div id="enemigo">
            <img id="cabezamanobatalla" src="cabezamano2.png" alt="alex">
        </div>
        <div id="nube1">
            <img id="nube1ini" src="nubepuño.png" alt="nube">
        </div>
        <div id="nube2">
            <img id="nube2ini" src="nubepuño.png" alt="nube">
        </div>
    </div>
    
    
</body>

</html>