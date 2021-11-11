function ampliar(){
    var div= document.querySelector("div");
    div.style.opacity=0.4;

    
    var padre = document.createElement("div");
    console.log(div.onclick)
    div.onclick = function(){
        console.log("dentro")
        fuera();
    };
    console.log(padre.onclick)
    padre.className="imagen";
    document.body.appendChild(padre)

    var img = document.createElement("img");
    img.src="4603.jpg";
    
    img.className="imagen";
   
    padre.appendChild(img);
    

}

function fuera() {
    var imagen = document.getElementsByClassName("img");
    var padre = document.querySelector("body");
    padre.removeChild(imagen);
  
}