window.onload = function () {
    
    do{
        var totalLuces = parseInt(prompt("Total de luces:"));
    }while(5>totalLuces||totalLuces>10);

    crear(totalLuces);
    ale(totalLuces);
    
}

function crear(totalLuces) {
    let padre = document.querySelector("#luces");
    let divs =[];
    for (let i = 0; i< totalLuces; i++) {
        divs[i] = document.createElement("div");
        divs[i].className="bolas";
        divs[i].style.setProperty("display","inline-block");
        divs[i].setAttribute("onclick","jugar("+i+")");
        padre.appendChild(divs[i]);
    }
}

function ale(totalLuces){
    var divs =[];
    var res = Math.floor(totalLuces/2);
    divs = document.getElementsByClassName("bolas");
    for (let i = 0; i < res; i++) {
        var ale = Math.floor(Math.random()*totalLuces);
        divs[ale].style.backgroundColor="yellow";
    }
}

function jugar(num) {
    var divs = document.getElementsByClassName("bolas");
    if(num==0){
        if(divs[num].style.backgroundColor=="yellow"){
            divs[num+1].style.backgroundColor="gray";
        }else{
            divs[num+1].style.backgroundColor="yellow";
        } 
    }
    else if(num==divs.length-1){
        if(divs[num].style.backgroundColor=="yellow"){
            divs[num-1].style.backgroundColor="rgb(128,128,128)";
        }else{
            divs[num-1].style.backgroundColor="yellow";
        } 
    }
}