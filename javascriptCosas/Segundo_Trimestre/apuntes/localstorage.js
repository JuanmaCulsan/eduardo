/*
TEMA 14 APUNTES
Almacenamiento

Cookies $_COOKIES -> se lo va a saltar de momento
las cookies solo puede guardar texto limitadas a kilobyte
doble.cookies


Hoy en día se utiliza:

Web Storage - AMBAS APIS FUNCIONAN EXACTAMENTE IGUAL
local storage:
- se mantiene hasta que alguien la borre, no tienen fecha de caducidad, sea el usuario o el programador (o programa)


session storage: 
- si cierro el navegador se pierde toda la información
- 


//ejemplo de formulario
Nombre:
Clave:
Nick:

button enviar


Local Storage es un mapa o array asociativa y cada cajon lo relleno como quiera.

localStorage()

1 Almacenar valores

    localStorage.popper = "Juanfran";
    localStorage.repe = nombre;


*/
var nombre;

localStorage.hola = "casa";
localStorage.repe = nombre;


localStorage["hola"]="Juanfran";


localStorage.setItem('hola',"juanfran");

/*
2. Recuperar valores:

1- var valor = localStorage.hola
2- var valor = localStorage['hola'];
3- var valor = localStorage.getItem['repe'];



*/

var valor = localStorage.getItem('repe');

/*
3 Borrar valores

1- localStorage.removeItem('popper');
2- localStorage.clear();


//lo que jaime va a preguntar
IMP: 

*/
for (let i = 0; i < localStorage.length; i++) {
    var clave = localStorage.key(i);
    localStorage[clave];
    localStorage.clave;
    
}
/*
4 objetos el storage

1- localStorage.removeItem('popper');
2- localStorage.clear();


//lo que jaime va a preguntar
IMP: 

*/

var alumno = {
    nombre: "juanma",
    edad: 26,
    curso: 2
}

localStorage.robert = alumno;

console.log(localStorage.robert);

/*
hay que transormarlo en texto y luego volver a convertirlo en json

2 funciones:

JSON.stringify(); coge el objeto y lo transforma en cadena de texto
JSON.parse(texto_json); coge el jason y lo transforma en objeto 
*/

var temp = JSON.stringify(alumno);

console.log(temp);

localStorage.robert=temp;

var alumno2=JSON.parse(localStorage.robert);

console.log(alumno2);
