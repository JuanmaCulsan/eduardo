function e1(){
    //en primer lugar compruebo que lo que introduce el usuario es positivo y menor que 9
    do{
        var filas = parseInt(prompt("Dime el número de filas"));
    }while(1>filas||filas>9);

    do{
        var columnas = parseInt(prompt("Dime el número de columnas"));
    }while(1>filas||filas>9);
    
    //llamo a la función donde voy a crear las filas y las columnas
    crearTabla(filas,columnas);
}

function crearTabla(filas,columnas){
    //llamo al padre y desde él creo al hijo
    var padre = document.querySelector(".solucion");
    var tabla= document.createElement("table");

    //lo meto en la clase tabla y dentro del padre
    tabla.className="tabla";
    padre.appendChild(tabla);

    //creo los arrays que van a ser las filas y las columnas
    var fils=[];
    var colums=[];

    //creo primero las filas dentro de la tabla
    for(let i = 1; i<=filas; i++){
        fils[i]=document.createElement("tr");
        tabla.appendChild(fils[i])

        //luego seleciono las columnas y les introduzco el valor de la fila por la que va a con innerhtml
        //luego les doy la clase td y las meto dentro de la fila por la que va
        for(let j =0;j<columnas;j++ ){
            colums[j]=document.createElement("td");
            colums[j].innerHTML=i;
            colums[j].className="td";
            fils[i].appendChild(colums[j]);
        }
    }
}