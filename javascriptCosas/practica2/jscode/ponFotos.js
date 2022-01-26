
//creo la funcion de poner fotos
function ponfoto() {
    //le pido que elija una imagen, si lo deja en blanco pongo una por defecto
    var imagen = prompt("Elige una imagen...","");
    if(imagen==""){
        imagen="terra.jpg";
    }
    //concateno la ruta con la imagen seleccionada
    var ruta = "../Culsan_Rondon_JuanManuel/img/";
    var rutaTotal = ruta+imagen;

    //llamo al padre y creo al hijo
    var padre = document.querySelector("#contenedor");
    var hijo = document.createElement("img");

    //le pongo los valores que quiero y la meto dentro del padre
    valorH=300+"px";
    hijo.src=rutaTotal;
    hijo.style.width=33+"%";
    hijo.style.height=33+"%";
    padre.appendChild(hijo);

    //una vez lo ha hecho activo el boton de limpiar
    var boton = document.querySelectorAll("input");
    boton[1].disabled=false;
}

function limpiar() {
    //lamo al padre y le digo que si existe un hijo de él que lo elimine
    var padre = document.querySelector("#contenedor");

    while(padre.firstChild){
        padre.removeChild(padre.firstChild);
    }
}

