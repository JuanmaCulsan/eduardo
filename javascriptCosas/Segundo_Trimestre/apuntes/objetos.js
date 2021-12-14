//JSON

var usuario = new Array() // asi hace como 2000 años

usuario[0]="jaja no";

//los arrays van a ser enviados hacia nosotros
//JSON es javascript object notation una alternativa mas sencilla menos completa que XML
//pasar informacion de un lado a otro, por ejemplo de una pagina web a una aplicacion
//JSON se pasa a fichero de texto.
// se abre corchete y se coloca cada elementos de la array separado por comas
var usuario=["juan","fran","carlos","santi"];
console.log(usuario[2]);

var temperaturas=[[17,22,13],[27,21,23],[19,21,22]];


//OBJETOS (y json)
//pueden haber arrays con objetos dentro y objetos con arrays dentro

var alumno = {
            nombre:"juan",
            edad:23,
            dni:"74839218S",
            asignaturas:["cliente","servidor","interfaces"],
            mentor:{
                    nombre:"Sr Hormiga",
                    edad:83,
                    sueldo:1200,
                    ciclos:["daw","dam","3D"]
                }
            }
//sacar por consola
console.log(alumno.nombre);
//ca
alumno.edad=21;

//sacarlo por un foreach
alumno.asignaturas.forEach(function(e) {
    console.log(e)
})

//sacarlo por un for
for (let i = 0; i < alumno.asignaturas.length; i++) {
    console.log(alumno.asignaturas[i]);
} 

alumno.mentor.ciclos.length;

//for in
for(let clave in alumno){
    if(clave=='mentor'){
        for(let otra in alumno[clave]){
            console.log(otra+" tiene "+ alumno[clave][otra]);
        }
    }
    else{
        console.log(clave+" tiene "+alumno[clave]);
    }
}

/*
for(let key in alumno){
    if(alumno=='key'){
        for (let a in alumno.mentor){
            console.log(otra+" tiene "+alumno[key][a]);
        }
    }
    else{
        console.log(key+" tiene "+alumno[key]);
    }
}

for (const iterator of object) {
    
}
*/

//AMBOS SIRVEN PARA RECORRER ARRAYS

//for in
for(let num in alumno.asignaturas){
    console.log(num);
    console.log(alumno.asignaturas[num]);
}

//for of
for (const num of alumno.asignaturas) {
    console.log(num);
}

