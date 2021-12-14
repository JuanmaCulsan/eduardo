window.onload = function () {
    var tutor1 = {
        nombre:"Juan",
        edad:60,
        dni:"95638476B",
        titulo_uni:"Geografía y Gestión del Territorio"
    }

    var tutor2 = {
        nombre:"Felipe",
        edad:32,
        dni:"47285612C",
        titulo_uni:"Economicas"
    }

    var asignatura1 = {
        nombre:"Urbanismo",
        curso:1,
        horas:140
    }

    var asignatura2 = {
        nombre:"Climatologia",
        curso:3,
        horas:140
    }

    var asignatura3 = {
        nombre:"Geografía fisica",
        curso:1,
        horas:150
    }

    var asignatura4 = {
        nombre:"Riesgos ambientales",
        curso:4,
        horas:100
    }

    var alumno = {
        nombre:"Sergio",
        edad:20,
        ciclo:"geografía",
        curso:2,
        tutor: tutor1,
        asignaturas: [asignatura1,asignatura2,asignatura4],
        notamedia: [8,9.5,7]
    }

    var div = document.querySelector("div");
    var nombre = document.createElement("h2");
    nombre.textContent=alumno.nombre;
    div.appendChild(nombre);


    for(let clave in alumno){
        if(clave=='asignaturas'){
            for(let otra in alumno[clave]){
                var parraf = document.createElement("p");
                parraf.textContent=otra+" : "+ alumno[clave][otra];
                div.appendChild(parraf);
            }
        }
        else if(clave=='tutor'){
            for(let otra in alumno[clave]){
                if(alumno.tutor[otra]=='nombre'){
                    var parraf = document.createElement("p");
                    parraf.textContent=otra+" : "+ alumno.tutor[otra].nombre;
                    div.appendChild(parraf);
                } 
            }
        }
        else{
            var parraf = document.createElement("p");
            parraf.textContent= clave+" : "+alumno[clave];
            div.appendChild(parraf);
            console.log(clave+" : "+alumno[clave]);
        }
        
    }
}