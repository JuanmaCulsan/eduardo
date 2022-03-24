var timer;

window.onload = function(){

    //pido el tamaño nada más cargar la página
    do{
       var tama = parseInt(prompt("Dime cuantas plantas quiere tener tu edificio, máximo 8, mínimo 1",""));
    }while(1>tama||tama>8);

    crear(tama);
    crearBotones();
}

function crearBotones(){
    var padre = document.querySelector("body");
    for(let i = 0; i < 2; i++){
        if(i==0){
            var botones = document.createElement("button");
            botones.innerHTML="Llamar ascensor";
            botones.id="botones";
            botones.setAttribute("onclick","llamar()");
            padre.appendChild(botones);
        }
        else if(i==1){
            var botones = document.createElement("button");
            botones.innerHTML="Apagar"
            botones.id="botones";
            botones.setAttribute("onclick","apagar()");
            botones.disabled=true;
            padre.appendChild(botones);
        }
    }
}


function crear(tama) {
    var padre = document.querySelector("#ascensor");
    var span = document.querySelectorAll("span");
    var planta=[];
    for (let i = 1; i<=tama; i++){
        if(i==1){
            planta[i] = document.createElement("div");
            planta[i].innerHTML=i;
            planta[i].className="planta";
            planta[i].style.backgroundColor="yellow";
            planta[i].style.border= "2px solid black";
        }else{
            planta[i] = document.createElement("div");
            planta[i].innerHTML=i;
            planta[i].className="planta";
        }
        padre.appendChild(planta[i]);
    }
    span[0].innerHTML=1;
    span[1].innerHTML="parado";
}

function llamar(){
    do{
        var eleccion = parseInt(prompt("Dime a que planta quieres ir",""));
    }while(!Number(eleccion));

    var planta = document.querySelectorAll(".planta");

    if(eleccion>planta.length){
        eleccion=planta.length;
    }
    else if(eleccion<1){
        eleccion=1;
    }
    //setinterval
    timer = setInterval(mover,1000,eleccion);
}


function mover(eleccion){
    posicionActual();
    var pos = parseInt(posicionActual());
    var planta = document.querySelectorAll(".planta");
    var span = document.querySelectorAll("span");

    if(pos==eleccion){
        alert("has llegado a tu planta");
        span[0].innerHTML=pos;
        span[1].innerHTML="parado";
        limpiarInterval();
    }
    else if(pos>eleccion){
        planta[pos-1].style.backgroundColor = "white";
        span[0].innerHTML=pos;
        span[1].innerHTML="bajando";
        pos--;
        planta[pos-1].style.backgroundColor = "yellow";
    }
    else if(pos<eleccion){
        planta[pos-1].style.backgroundColor = "white";
        span[0].innerHTML=pos;
        span[1].innerHTML="subiendo"
        pos++;
        planta[pos-1].style.backgroundColor = "yellow";
    }
    var botones = document.querySelectorAll("button");
    botones[1].disabled=false;     
}

function apagar(){
    var padre = document.querySelector("#ascensor");
    var hijo = document.querySelectorAll(".planta");
    var span = document.querySelectorAll("span");

    span[0].innerHTML="X";
    span[1].innerHTML="parado";

    for(let i = 0; i < hijo.length;i++){
        padre.removeChild(padre.firstChild);
    }

    var botones = document.querySelectorAll("button");
    for (let i = 0; i < botones.length; i++) {
        botones[i].disabled=true;      
    }   
}

function posicionActual(){
    var divs = document.querySelectorAll(".planta");
    for(let i =0; i< divs.length;i++){

        var estilo = window.getComputedStyle(divs[i]);
        var bg = estilo.getPropertyValue("background-color");

        if(bg=="rgb(255, 255, 0)"){
            var posActual=parseInt(divs[i].innerHTML);
            i=divs.length;
        }
    }
    return posActual;
}

function limpiarInterval(){
    clearInterval(timer);
}