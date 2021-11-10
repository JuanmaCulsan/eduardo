function generar() {
    var parrafo = document.querySelector("p");
    var texto = parrafo.innerHTML;
    var nodoTexto = document.createTextNode(texto);

    var nuevoP = document.createElement("p");
    nuevoP.className="claseB";
    nuevoP.appendChild(nodoTexto);

    var padre = document.querySelector("div");
    padre.appendChild(nuevoP);

    var botones = document.querySelectorAll("button");
    botones[2].disabled=false;
}

function borrarViejo(){
    var padre = document.querySelector("div");
    var elemento = document.getElementsByTagName("p");
    padre.removeChild(elemento[0]);

    var botones = document.querySelectorAll("button");
    botones[1].disabled=true;
    botones[3].disabled=true;
}

function borrarNuevo(){
    var padre = document.querySelector("div");
    var p = document.querySelectorAll("p");

    if(p[0].className!="claseA"){
        while(padre.firstChild){
            padre.removeChild(padre.firstChild);
        }
    }
    else{
        for (let i = 1; i < p.length; i++) {
            padre.removeChild(p[i]);
        }
    }
}

function sustituir(){
    var padre = document.querySelector("div");
    var p = document.querySelectorAll("p");

    if(p[0].className=="claseA"){
        padre.removeChild(p[0]);
    }

    var tabla = document.createElement("table");
    tabla.className="tabla";
    var tabla1 = document.createElement("tr");
    var tabla2 = document.createElement("td");
    var tabla3 = document.createElement("td");
    var tabla4 = document.createElement("tr");
    var tabla5 = document.createElement("td");
    var tabla6 = document.createElement("td");

    var padre = document.querySelector("div");
    padre.appendChild(tabla);
    padre.appendChild(tabla1);
    padre.appendChild(tabla2);
    padre.appendChild(tabla3);
    padre.appendChild(tabla4);
    padre.appendChild(tabla5);
    padre.appendChild(tabla6);

}