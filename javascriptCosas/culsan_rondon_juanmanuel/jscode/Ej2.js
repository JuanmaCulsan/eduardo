function generar() {
    //lo siento no sé hacerlo por querry selector all
    var generar = document.querySelectorAll("input")[0];

    //cojo el elemento dentro del div que en este caso es ninguno y lo añado
    var izq = document.getElementById("ladoIzq").textContent;
    var aleIz = Math.floor(Math.random()*(50-1)+1);
    document.getElementById("ladoIzq").textContent=aleIz;

    var der = document.getElementById("ladoDer").textContent;
    var aleDer = Math.floor(Math.random()*(50-1)+1);
    document.getElementById("ladoDer").textContent=aleDer;

    //así accedo al botón de abajo
    var boton = document.querySelector("#boton");
    boton.disabled=false;
}


function comparar() {
    //selecciono los elementos 
    var boton = document.querySelector("#boton");
    var izq = document.getElementById("ladoIzq").textContent;
    var der = document.getElementById("ladoDer").textContent;

    if(parseInt(aleIz)>parseInt(aleDer)){
        document.getElementById("salida").textContent=izq;
    }
    else{
        document.getElementById("salida").textContent=der;
    }
 
    boton.disabled = true;
}


