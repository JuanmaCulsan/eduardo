function crear() {
    var texto = prompt("mete texto primo","");
    var nodoTexto = document.createTextNode(texto);

    var nuevo = document.createElement("p");
    nuevo.align="center";
    nuevo.className="agobio";
    //nuevo.setAttribute("align","center");

    //para enganchar el nodo texto a la etiqueta 
    nuevo.appendChild(nodoTexto);

    var papi = document.querySelector("article");
    papi.appendChild(nuevo);

    //pa engancharlo en el body
    var papo = document.body;
    papo.appendChild(nuevo);

    var hermano = document.getElementById("cabecera");
    papi.insertBefore(nuevo,hermano);
 
}

function borrar() {
    //1 llegar al padre
    var papi = document.querySelector("article");
    var elemento = document.getElementsByTagName("p");
    //otra forma de ahorrarnos la primera linea para poder buscar al padre
    //var papi = elemento.parentNode;


    //2 eliminar desde el padre
    papi.removeChild(elemento[0]);


    //var papi = document.querySelector("p");
    //var hijos = papi.children;
    //papi.removeChild(hijos[2]);

    //borrar todo

    
    //while(papi.firstChild){
        //papi.removeChild(papi.firstChild);
    //}  
}

