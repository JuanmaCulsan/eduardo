function abrir(num) {
    var listas = document.querySelectorAll("ul");
    listas[num].style.position="relative";
    listas[num].style.display="block";

    for (let i = 1; i <= listas.length; i++) {
        if(i!=num){
            listas[i].style.position="relative";
            listas[i].style.display="none";
        }
    }
}