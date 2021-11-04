var timer;

window.onload = function(){
    reanudar();
} 

function mover(){
    var dedo = document.getElementById("cuadrado");
    var ale = parseInt(Math.floor(Math.random()*1700+1));
    dedo.style.left = ale+"px";

    var ale2 = parseInt(Math.floor(Math.random()*800+1));
    dedo.style.top = ale2+"px";

}

function parar(){
    timer=clearInterval(timer);
}

function reanudar(){
    timer=setInterval("mover()",500);
}