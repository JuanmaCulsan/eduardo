var timer;

window.onload = function(){
    mover();

    dedo=document.getElementById("cuadrado");
    //toodo el codigo debajo de esto funciona 
    console.log("kaka");

    console.log(screen.width);
    console.log(screen.height);
    //esto sin contar las barras del sistema de window
    console.log(screen.availWidth);
    console.log(screen.availHeight);
    //te da el número en bits en profundida de color
    console.log(screen.colorDepth);


    // lo que ocupa la ventana del navegador
    console.log(window.innerHeight);
    console.log(window.innerWidth);

    //te suma el width junto con el padding
    console.log(dedo.clientWidth);
    console.log(dedo.clientHeight);
    //te suma el width junto con el padding y el border
    console.log(dedo.offsetWidth);
    console.log(dedo.offsetHeight);
} 

function carrera(){
    var dedo = document.getElementById("cuadrado");
    var estilo = window.getComputedStyle(dedo);
    var lef = estilo.getPropertyValue("left");

    resultado = parseInt(lef)+5;
    if((resultado+190)<screen.width){
        dedo.style.setProperty("left",resultado+"px");
    }
        

}

function mover(){
    timer = setInterval("carrera()",2);
}

function parar(){
    clearInterval(timer);
}


