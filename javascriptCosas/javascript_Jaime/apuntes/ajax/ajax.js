window.onload= function(){
    document.querySelector('input[type="button"]').onclick = function(){
        this.disable=true;
        
        //PASO 1 crear el objeto XMLHttpRequest
        let manolito;
        if(window.XMLHttpRequest){
            manolito = new XMLHttpRequest();
        }
        else {
            manolito = new ActiveXObject("Microsoft.XMLHTTP");
        }

        //PASO 2 crear la petición de datos
        //parámetros: el verbo y la dirección del recurso
        manolito.open('GET',"contenido.txt");

        //si es de manera externa 
        //manolito.open('GET',"http://www.jaimeweb.es/medac/datos.json");

        //PASO 3: crear la función para manejar los datos que me llegan (esta funcion se asocia al evento LOAD)
        manolito.addEventListener('load',function(datos){
            console.log("han llegado los datos");
            //let respuesta = JSON.parse(datos.target.response);
            //document.getElementById("parra").innerHTML=respuesta;
            //document.querySelector('input[type="button"]').disable=false;
            // console.log(respuesta[1].nombre);
            // console.log(respuesta[1].email);
        });

        //PASO 4 enviar la peticion

        manolito.send();

        console.log("soy el último");
    }
}
