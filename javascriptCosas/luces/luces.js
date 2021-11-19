window.onload = function () {
    
    //do{
        var totalLuces = parseInt(prompt("Total de luces:"));
    //}while(totalLuces<6&&totalLuces>10);

    crear(totalLuces);
    
}

function crear(x) {
    let padre = document.querySelector("#luces");
    for (let i = 0; i< x; i++) {
        let divs = document.createElement("div");
        divs.className="bolas";
        divs.style.setProperty("display","inline-block");
        divs.onclick="jugar()";
        padre.appendChild(divs);
    }
}

function ale(){
    
    for (let i = 0; i < x; i++) {
        
        
    }
}