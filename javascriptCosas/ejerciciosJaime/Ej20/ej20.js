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

    var div = document.querySelector("div");
    var tabla = document.createElement("table");
    tabla.className="tabla";
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    tabla.appendChild(thead);
    tabla.appendChild(tbody);

    var cuerpo = document.querySelector("body");

    cuerpo.replaceChild(tabla,div);

    cuerpo.insertBefore(tabla,div);

    var row_1 = document.createElement("tr");
    var space_1 = document.createElement("th");
    space_1.innerHTML="sobaco";
    var space_2 = document.createElement("th");
    space_2.innerHTML="chorizo";

    thead.appendChild(row_1);
    row_1.appendChild(space_1);
    row_1.appendChild(space_2);

    
    //div.appendChild(tabla);
    

}