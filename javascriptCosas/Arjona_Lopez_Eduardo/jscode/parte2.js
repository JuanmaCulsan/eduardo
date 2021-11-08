function generar() {
    
    var ladIz=document.getElementById("ladoIzq"),ladDer=document.getElementById("ladoDer");//pillo los 2 lados
    var salida=document.getElementById("salida");//identifico el div de abajo
    var boton=document.querySelectorAll("input");

    ladIz.textContent=parseInt(Math.random()*50+1);//saco numero aleatorio en el lado Izquiero
    ladDer.textContent=parseInt(Math.random()*50+1);//saco otro numero aleatorio en el lado Derecho
    
    boton[0].setAttribute("disabled",true);//deshabilito el boton para GENERAR
    boton[1].removeAttribute("disabled");//habilito el boton para COMPARAR
    
    salida.textContent="";//borro todo lo que tenga el div salida
}

function comparar() {
    
    var ladIz=document.getElementById("ladoIzq"),ladDer=document.getElementById("ladoDer");
    var salida=document.getElementById("salida");
    var boton=document.querySelectorAll("input");

    var num1=parseInt(ladIz.textContent),num2=parseInt(ladDer.textContent);//meto en variables los numeros de los 2 lados
    if (num1>num2) {//compruebo cual numero es mayor de los 2 lados y meto en el div salida el numero mayor
        
        salida.textContent=ladIz.textContent;
    }
    else if(num2>=num1){
        salida.textContent=ladDer.textContent;
    }

    boton[1].setAttribute("disabled",true);//habilito el boton para GENERAR
    boton[0].removeAttribute("disabled");//deshabilito el boton para COMPARAR
}