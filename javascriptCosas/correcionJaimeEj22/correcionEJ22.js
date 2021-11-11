//1.- quiero un div que ocupe toda la zona visible y colocarlo encima de todo

function ampliar() {
    var nuevo = document.createElement("div");
    nuevo.className="capa";
    nuevo.style.width=window.innerWidth+"px";
    nuevo.style.height=window.innerHeight+"px";ç

    document.body.appendChild(nuevo);
    //

//2.- crear una imagen en el centro de la pantalla con su tamaño real
    var nimg = document.createElement("img");
    nimg.src="4603.jpg";
    nimg.className="imagen";
    nimg.style.top="";
    nimg.style.left=window.innerWidth;
    document.body.appendChild(nimg);
}