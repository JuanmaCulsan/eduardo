//FUNCIONES CON FORMA

/*
ARRAYS FUNCTIONS (funciones con callback)
callback son funciones como parámetros de funciones

 
las funciones pueden:

- No recibe nada (los () vacios), no devuelve nada (no hay return).
function misterio(){

}


- Recibe algo, no devuelve nada
misterio(24,"juanma",65,9);
function misterio(edad,nombre,peso,num){

}


una llamada a una funcion que se tiene que ejecutar previamente en otra funcion

function canutos(num,function(){
    return 2+5*3;
    }){

    }
}


ejemplo

var lista = [2,3,27,8,32,54,89,11,13,7,9];

function mayorEdad(e){
    return e>=18;
    //devuelve true o false ya que pregunta si se cumple la función
}

var lista.some(mayorEdad);


OTRA FORMA

res = lista.some(function(e){
        return e >=18;
    });


alert(mayorEdad(19));

*/
function mayorEdad(e){
    return e>=18;
    //devuelve true o false ya que pregunta si se cumple la función
}

var lista = [2,3,27,8,32,54,89,11,13,7,9];

var res = lista.some(function(e){
    return e >=18;
});

console.log(res);

var otra= lista.every(function(e){
    return e >=18;
});

console.log(otra);

//funcion que se utiliza para recorrer array
//FOREACH
function mostrar(e){
    console.log(e);
}

lista.forEach(mostrar);

function mostrar2(e,i){
    var cad = "en el cajón "+i+" está el valor "+e;
    console.log(cad);
}

lista.forEach(mostrar2);

var another =lista.map(nuevo);

function nuevo(e,i){
    var res = e*i;
    console.log(res);
}

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
