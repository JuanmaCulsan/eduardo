function anadir() {
    var texto = prompt("Introduce una frase","");
    var nodotexto = document.createTextNode(texto);
    
    var nuevo = document.createElement("li");
    nuevo.appendChild(nodotexto);

    var papi = document.querySelector("ul");
    papi.appendChild(nuevo);
}