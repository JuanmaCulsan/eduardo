window.onclick = function(){
    var celdas = document.getElementsByTagName("td");
    /*
    for (let i=0; i < celdas.length; i++) {
        celdas[i].onclick=function(){
            var bg = this.style.backgroundColor;
            if(bg=="white"){
                this.style.backgroundColor="black";
            }
            else{
                this.style.backgroundColor="white";
            }
        
        }  
    }
    */
    for (let i=0; i < celdas.length; i++) {

        celdas[i].onclick=function(){

            var lista=["red","green","blue","yellow"];
            var bg = this.style.backgroundColor;

            if(lista.indexOf(bg)==-1||bg==lista[3]){
                this.style.backgroundColor=lista[0];
            }
            else if(bg==lista[0]){
                this.style.backgroundColor=lista[1];
            }
            else if(bg==lista[1]){
                this.style.backgroundColor=lista[2];
            }
            else{
                this.style.backgroundColor=lista[3];
            }
        
        }  
    }

}
