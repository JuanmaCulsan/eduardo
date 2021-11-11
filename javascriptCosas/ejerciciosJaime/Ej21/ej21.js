function enlace(num) {
    if(num==0){
        var nuevo = document.createElement("div");
        nuevo.className="enlace";
        
        var href = document.querySelectorAll("a")
        var valor = href[num].getAttribute("href");

        var texto = "Esto es un enlace a "+valor;
        var nuevotexto=document.createTextNode(texto);

        nuevo.appendChild(nuevotexto);

        var padre = document.querySelector("body");
        padre.appendChild(nuevo);
    }
    else if(num==1){
        var nuevo = document.createElement("div");
        nuevo.className="enlace";
        
        var href = document.querySelectorAll("a")
        var valor = href[1].getAttribute("href");
        
        var texto = "Esto es un enlace a "+valor;
        var nuevotexto=document.createTextNode(texto);

        nuevo.appendChild(nuevotexto);

        var padre = document.querySelector("body");
        padre.appendChild(nuevo);
    }
    else if(num==2){
        var nuevo = document.createElement("div");
        nuevo.className="enlace";
        
        var href = document.querySelectorAll("a")
        var valor = href[2].getAttribute("href");
        
        var texto = "Esto es un enlace a "+valor;
        var nuevotexto=document.createTextNode(texto);

        nuevo.appendChild(nuevotexto);

        var padre = document.querySelector("body");
        padre.appendChild(nuevo);

    }else{
        var nuevo = document.createElement("div");
        nuevo.className="enlace";
        
        var href = document.querySelectorAll("a")
        var valor = href[3].getAttribute("href");
        
        var texto = "Esto es un enlace a "+valor;
        var nuevotexto=document.createTextNode(texto);

        nuevo.appendChild(nuevotexto);

        var padre = document.querySelector("body");
        padre.appendChild(nuevo);
    }  
}

function fuera(){
    var padre = document.querySelector("body");
    var elemento = document.querySelector("div");
    padre.removeChild(elemento);
}