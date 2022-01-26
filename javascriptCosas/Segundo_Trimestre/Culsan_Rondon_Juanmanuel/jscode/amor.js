window.onload = function(){
    var boton = document.querySelector('input[type="submit"]');
    console.log(boton);
    boton.onclick=function(e){
        e.preventDefault();
        validar();
    }

    function validar(){
        var cont = 0;
        var f = document.getElementById("formu");
        var nick = f.nick;
        //APARTADO DE NICK
        if(nick.value==""){
            alert("El campo nick no puede estar vacio");
            nick.focus();
            nick.style.backgroundColor = "yellow";
            cont++;
        }

        //OPCIONAL
        //En el campo donde se introduce el nick no se admiten sólo números
        if(!isNaN(nick.value)){
            alert("El campo nick no puede tener solo numeros");
            nick.focus();
            nick.style.backgroundColor = "yellow";
            cont++;
        }

        //APARTADO DE CLAVE
        var claves = document.querySelectorAll('input[type="password"]');
        var clave2 = claves[1];
        var clave = f.clave;
        if(clave.value==""){
            alert("El campo clave puede estar vacio");
            clave.style.backgroundColor = "yellow";
            clave.focus();
            clave.value="";
            clave2.value=""; 
            cont++;
        }

        //El contenido del campo donde va la clave no puede coincidir con el contenido del campo usado para el pseudónimo
        if(nick.value==clave.value){
            alert("El campo nick y el campo clave no pueden ser iguales");
            clave.style.backgroundColor = "yellow";
            clave2.style.backgroundColor = "yellow";
            clave.focus();
            clave.value="";
            clave2.value=""; 
            cont++;
        }

        //La longitud mínima de la clave debe ser de 8 caracteres.
        if(clave.value.length<8){
            alert("El campo clave puede tener menos de 8 caracteres");
            clave.style.backgroundColor = "yellow";
            clave2.style.backgroundColor = "yellow";
            clave.focus();
            clave.value="";
            clave2.value="";
            cont++;
        }

        //se debe repetir la clave
        if(clave2.value==""){
            alert("Debes repetir la clave");
            clave2.focus();
            clave2.style.backgroundColor = "yellow";
            clave.value="";
            clave2.value="";
            cont++;
        }

        //El campo clave debe coincidir con el campo donde se repite la clave
        if(clave.value!=clave2.value){
            // alert("Debes repetir la clave");
            clave2.focus();
            clave2.style.backgroundColor = "yellow";
            clave.value="";
            clave2.value="";
            cont++;
        }

        //PREGUNTA
        //El campo donde se indican la pregunta debe tener seleccionada alguna opción de su lista que no sea la primera. 
        pregunta = f.pregunta
        if(pregunta.selectedIndex==0){
            alert("No elijas la primera pregunta mendrugo");
            pregunta.focus();
            pregunta.style.backgroundColor = "yellow";
            cont++;
        }


        //RESPUESTA
        var respuesta = f.respuesta;
        if(respuesta.value==""){
            alert("Por favor introduzca una respuesta");
            respuesta.focus();
            respuesta.style.backgroundColor = "yellow";
            cont++;
        }

        //La longitud mínima del campo donde va a respuesta debe ser 6 caracteres.
        if(respuesta.value.lenght<6){
            alert("Por favor introduzca una respuesta con 6 caracteres o más");
            respuesta.focus();
            respuesta.style.backgroundColor = "yellow";
            cont++;
        }

        //BOTONES GÉNERO
        //Al menos un botón radio debe estar marcado.
        var radio = document.querySelectorAll('input[type="radio"');
        var masc = radio[0];
        var fem = radio[1];
        if((!masc.checked)&&(!fem.checked)){
            alert("elige uno de los géneros por favor");
            cont++;
        }

        //EDAD
        var edad = f.edad;
        if(edad.value==""){
            alert("El campo edad no puede estar vacio");
            edad.focus();
            edad.style.backgroundColor = "yellow";
            cont++;
        }

        //El campo edad solo puede contener números y estar en un rango válido que va desde 3 hasta 99 años.
        if((isNaN(edad.value))||((edad.value<3)||(edad.value>99))){
            alert("por favor introduce un número comprendido entre 3 y 99");
            edad.focus();
            cont++;
        }
        
        //EMAIL
        var email = f.email
        if(email.value==""){
            alert("El campo email no puede estar vacio");
            email.style.backgroundColor = "yellow";
            email.focus();
            cont++;
        }
        
        // Comprobar que en el campo donde va el email se coloca unadirección de email válida
        var cortar = f.email.value.split("");
        for(let i = 0; i<cortar.lenght;i++){
            if((cortar[i]=="@")||(cortar[i+1]==".")){
                alert("El campo email no es correcto");
                email.focus();
                email.style.backgroundColor = "yellow";
                cont++;
            }
        }


        //CAPTCHA
        var captcha = document.querySelectorAll('input[type="text"]');
        var rango = captcha.length;
        var lastText = captcha[rango-1];
        console.log(lastText);
        if(lastText.value!="NJFDD"){
            alert("Introduce de manera correcta el captcha por favor");
            lastText.focus();
            lastText.style.backgroundColor = "yellow";
        }

        //ACEPTAR CONDICIONES DE USO
        var checkbox = document.querySelector("input[type='checkbox']");
        if(!checkbox.checked){
            alert("Acepta las condiciones de uso");
            checkbox.focus();
            checkbox.style.backgroundColor = "yellow";
            cont++;
        }

        if(cont==0){
            alert("se ha enviado su formulario correctamente");
            var usuario = {
                nick: nick.value,
                clave: clave.value,
                edad: edad.value,
                email: email.value
            }

            localStorage.user = JSON.stringify(usuario);
            f.submit();
            cont=0;
        }
        else{
            alert("si formulario no se ha completado correctamente, vuelve a hacerlo por favor");
            cont=0;
        }
    }
}