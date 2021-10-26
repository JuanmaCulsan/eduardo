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