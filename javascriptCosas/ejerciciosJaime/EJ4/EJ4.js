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