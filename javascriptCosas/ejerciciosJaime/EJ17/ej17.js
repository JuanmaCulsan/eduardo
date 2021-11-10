var timerRojo,timerVerde,timerAzul,timerAmarillo;

function run(){
    var aleRojo = Math.floor(Math.random()*30+1);
    timerRojo = setInterval("correrRojo()",aleRojo);

    var aleVerde = Math.floor(Math.random()*30+1);
    timerVerde = setInterval("correrVerde()",aleVerde);

    var aleAzul = Math.floor(Math.random()*30+1);
    timerAzul = setInterval("correrAzul()",aleAzul);

    var aleAmarillo = Math.floor(Math.random()*30+1);
    timerAmarillo = setInterval("correrAmarillo()",aleAmarillo);
     
}


function correrRojo(){
    var rojo = document.querySelectorAll("div")[0];
    var estiloR= window.getComputedStyle(rojo);
    var leftRojo= estiloR.getPropertyValue("left");
    var ancho = estiloR.getPropertyValue("width");


    anchoRojo=parseInt(ancho);
    resRojo=parseInt(leftRojo)+1;
    if((resRojo+anchoRojo)<screen.width){
        rojo.style.left=resRojo+"px";
    }
    else{
        clearInterval(timerRojo);
    }
}

function correrAzul(){
    var azul = document.querySelectorAll("div")[1];
    var estiloA= window.getComputedStyle(azul);
    var leftAzul= estiloA.getPropertyValue("left");

    resAzul=parseInt(leftAzul)+1;
    azul.style.left=resAzul+"px";
}

function correrVerde(){
    var verde = document.querySelectorAll("div")[2];
    var estiloV= window.getComputedStyle(verde);
    var leftVerde= estiloV.getPropertyValue("left");

    resVerde=parseInt(leftVerde)+1;
    verde.style.left=resVerde+"px";
}

function correrAmarillo(){
    var amarillo = document.querySelectorAll("div")[3];
    var estiloAm= window.getComputedStyle(amarillo);
    var leftAmarillo= estiloAm.getPropertyValue("left");

    resAmarillo=parseInt(leftAmarillo)+1;
    amarillo.style.left=resAmarillo+"px";
}

function reset(){
    clearInterval(timerRojo);
    clearInterval(timerAzul);
    clearInterval(timerVerde);
    clearInterval(timerAmarillo);
    //ROJO
    var rojo = document.querySelectorAll("div")[0];
    rojo.style.left=0+"px";

    //AZUL
    var azul = document.querySelectorAll("div")[1];
    azul.style.left=0+"px";

    //VERDE
    var verde = document.querySelectorAll("div")[2];
    verde.style.left=0+"px";

    //AMARILLO
    var amarillo = document.querySelectorAll("div")[3];
    amarillo.style.left=0+"px";
}