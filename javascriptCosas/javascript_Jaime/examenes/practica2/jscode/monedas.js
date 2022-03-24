//primero creo la variable local de timer
var timer;
//var exist;

//obligo a a que se cargue primero la página (sinceramente no sé si funciona)
window.onclick= function (){

}

//la variable generar tiene un timer que va a llamar a la función mover
function generar() {
    timer = setInterval(mover,100);
    
}


function mover(){
    //exist=false;
    //primero busco la etiqueta meter y miro el valor del value
    //añadirá un valor en cada bucle del setInterval
    var recorrido = document.querySelector("meter");
    if(recorrido.value>=75&&recorrido.value<=100){
        recorrido.value+=1;
        //aqui es si llega hasta el punto concreto (25,50,75,100)
        if(recorrido.value==100){
            //mira la etiqueta span y le añade al innerhtml el número correspondiente
            //limpia el timer para que sea el usuario quien tenga que meter moneda
            var etiqueta = document.querySelectorAll("span");
            etiqueta[1].innerHTML=4;
            clearInterval(timer);
        }
    }
    else if(recorrido.value>=50&&recorrido.value<=75){
        recorrido.value+=1;
        if(recorrido.value==75){
            var etiqueta = document.querySelectorAll("span");
            etiqueta[1].innerHTML=3;
            clearInterval(timer);
        }
    }
    else if(recorrido.value>=25&&recorrido.value<=50){
        recorrido.value+=1;
        if(recorrido.value==50){
            var etiqueta = document.querySelectorAll("span");
            etiqueta[1].innerHTML=2;
            clearInterval(timer);
        }
    }
    else{
        recorrido.value+=1;
        if(recorrido.value==25){
            var etiqueta = document.querySelectorAll("span");
            etiqueta[1].innerHTML=1;
            clearInterval(timer);
        }
    }
    
    
    //si el recorrido llega a 100
    if(recorrido.value==100){
        //busca el 3 article y le crea una imagen
        var articulo = document.querySelectorAll("article");
        var imagen = document.createElement("img");
        //metemos la ruta de la misma
        imagen.src="../Culsan_Rondon_JuanManuel/img/countess.jpg";
        //se la añadimos al padre
        articulo[2].appendChild(imagen);
        //seteamos el recorrido a 0
        recorrido.value=0; 
        //exist=true;
    } 
    //matarImagen(exist); 
}

function matarImagen() {
    if(exist){
        var articulo = document.querySelectorAll("article");
        var imagen = document.querySelector("img");
        articulo[2].removeChild(imagen);
    }
}