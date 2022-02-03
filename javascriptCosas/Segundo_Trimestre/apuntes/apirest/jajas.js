window.onload= function(){
    document.querySelector('input[type="button"]').onclick = function(){
        
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
        //manolito.open('GET',"contenido.txt");

        //si es de manera externa 
        manolito.open('GET',"http://jaimeweb.es/medac/getProfesores.php");

        //PASO 3: crear la función para manejar los datos que me llegan (esta funcion se asocia al evento LOAD)
        manolito.addEventListener('load',function(datos){
            let respuesta = JSON.parse(datos.target.response);
            console.log(respuesta);
            //console.log(respuesta[0].address.street);
    
        });

        //PASO 4 enviar la peticion

        manolito.send();

        //console.log("soy el último");
    }
}