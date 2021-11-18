window.onload = function(){

    var imagenes = [
        "perritos/perrito1.jpg",
        "perritos/perrito2.jpg",
        "perritos/perrito3.jpg",
        "perritos/perrito4.jpg",
        "perritos/perrito5.jpg"
    ];

    var foto = document.querySelector("#foto");
    var forward = document.querySelector("#forward");
    var back = document.querySelector("#back");
    var cont=0;

    forward.onclick = function() {
        if(cont<=3){
            cont++;
            foto.setAttribute("src",imagenes[cont]);
        }
        else{
            forward.disabled = true;
        }
    }

    back.onclick = function() {
        if(cont>=1){
            cont--;
            foto.setAttribute("src",imagenes[cont]);
        }
        else{
            back.disabled = true;
        }
    }

}

var imagenes = [
    "perritos/perrito1.jpg",
    "perritos/perrito2.jpg",
    "perritos/perrito3.jpg",
    "perritos/perrito4.jpg",
    "perritos/perrito5.jpg"
];

var hola
function play() {
    hola = setInterval("mover()",1000);
    let caca = document.querySelector("#play");
    caca.setAttribute("onclick","stop()");
    document.querySelector("#play").innerHTML = "STOP";
    
}


var cont=0
function mover() {
    imagenes;
    meter();
    if(cont>=imagenes.length){
        cont=0
    }
    foto.setAttribute("src",imagenes[cont]);
    console.log(cont);
    cont++;
}

function stop() {
    clearInterval(hola);
    let caca = document.querySelector("#play");
    caca.setAttribute("onclick","play()");
    document.querySelector("#play").innerHTML = "PLAY";
    cont=0;
}

var pedir;
function anadir() {
    pedir = prompt("dime una ruta: ","");
    meter();
}

function meter() {
    console.log(pedir);
    imagenes.push(pedir);
    console.log(imagenes);
}
    



/*

        function fotoanterior{
            fotomostrada = document.querySelector("img");
            let atributosrc = fotoMostrada.getAtributte("src");
            switch (atributosrc){
                case="--/img5.jpg":
                    fotoMostrada.setAttribute("src",../img/4.jpg);
                    break;
                
                case="--/img4.jpg":
                    fotoMostrada.setAttribute("src"../img/3.jpg);
                    break;

                case="--/img3.jpg":
                    fotoMostrada.setAttribute("src"../img/2.jpg);
                    break;

                case="--/img2.jpg":
                    fotoMostrada.setAttribute("src"../img/1.jpg);
                    break;
            }
        }

        function fotoSiguiente{
            fotomostrada = document.querySelector("img");
            let atributosrc = fotoMostrada.getAtributte("src");
            switch (atributosrc){
                case="--/img1.jpg":
                    fotoMostrada.setAttribute("src",../img/2.jpg);
                    break;
                
                case="--/img2.jpg":
                    fotoMostrada.setAttribute("src"../img/3.jpg);
                    break;

                case="--/img3.jpg":
                    fotoMostrada.setAttribute("src"../img/4.jpg);
                    break;

                case="--/img4.jpg":
                    fotoMostrada.setAttribute("src"../img/5.jpg);
                    break;
            }
        }
*/