var timer;

function mover() {
    timer = setInterval("cargar()",20);
}

function cargar() {
    var dedo = document.getElementById("barra");
    var estilo = window.getComputedStyle(dedo);
    var anchura = estilo.getPropertyValue("width");

    var dedo2 = document.getElementById("todo");
    var estilo2 = window.getComputedStyle(dedo2);
    var anchura2 = estilo2.getPropertyValue("width");

    var dedo3 = document.getElementById("desc");

    res2 = parseInt(anchura2);

    res = parseInt(anchura)+1;

    if(res<=res2){
        dedo.style.setProperty("width",res+"px");
    }
    else{
        clearInterval(timer);
        dedo3.disabled=false;
    }
}

function descargar(){
    var dedo = document.getElementById("barra");
    var estilo = window.getComputedStyle(dedo);
    var anchura = estilo.getPropertyValue("width");

    res=parseInt(anchura);
    res=0;
    dedo.style.setProperty("width",res+"px");

    var dedo3 = document.querySelector("button");
    dedo3.disabled=true;

}



