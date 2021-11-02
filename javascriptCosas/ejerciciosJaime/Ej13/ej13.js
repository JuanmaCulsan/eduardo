function spoiler() {
    var a = document.querySelector("a");
    
    var parrafo = document.getElementById("spoiler");
    var estilo = window.getComputedStyle(parrafo);
    var display = estilo.getPropertyValue("display");

    if(display=="none"){
        parrafo.style.setProperty("display","block");
        a.innerText ="ocultar";
    }
    else{
        parrafo.style.setProperty("display","none");
        a.innerText="mostrar";
    }
}