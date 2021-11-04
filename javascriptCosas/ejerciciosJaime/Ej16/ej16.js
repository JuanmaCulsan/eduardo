var timer;

function cargar() {
    var dedo = document.getElementById("barra");
    var estilo = window.getComputedStyle(dedo);
    var anchura = estilo.getPropertyValue("width");

    res = parseInt(anchura);

    
    dedo.style.width(res+1+"px");



}

function descargar() {
    timer = setInterval("cargar()",1000);
}

