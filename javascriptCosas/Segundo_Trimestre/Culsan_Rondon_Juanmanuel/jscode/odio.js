window.onload=function(){
    //para acabar trasformamos el string en un objeto
    var objeto = JSON.parse(localStorage.user);
    //si no existe
    if(!localStorage.user){
        console.log("Sin datos..")
    }
    //si existe mostramos por consola
    else{
        for (let i in objeto) {
            console.log("en la clave "+i+" se almacena el valor "+objeto[i]);
        }
        
    }
    
}